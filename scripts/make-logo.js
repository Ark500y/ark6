const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const buf = fs.readFileSync(path.join(__dirname, '../public/logo/ark.png'));
let pos = 8;
const idatChunks = [];
let width, height;
while (pos < buf.length) {
  const len = buf.readUInt32BE(pos);
  const type = buf.toString('ascii', pos + 4, pos + 8);
  if (type === 'IHDR') {
    width = buf.readUInt32BE(pos + 8);
    height = buf.readUInt32BE(pos + 12);
  } else if (type === 'IDAT') {
    idatChunks.push(buf.subarray(pos + 8, pos + 8 + len));
  }
  pos += 12 + len;
}
const uncompressed = zlib.inflateSync(Buffer.concat(idatChunks));
const stride = width * 4;
const pixels = Buffer.alloc(width * height * 4);
let srcOffset = 0, dstOffset = 0;
function paeth(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
  return (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c);
}
for (let y = 0; y < height; y++) {
  const filter = uncompressed[srcOffset++];
  for (let x = 0; x < width; x++) {
    for (let c = 0; c < 4; c++) {
      const raw = uncompressed[srcOffset++];
      const left = x > 0 ? pixels[dstOffset - 4] : 0;
      const up = y > 0 ? pixels[dstOffset - stride] : 0;
      const upLeft = (x > 0 && y > 0) ? pixels[dstOffset - stride - 4] : 0;
      let val = raw;
      if (filter === 1) val = (raw + left) & 0xff;
      else if (filter === 2) val = (raw + up) & 0xff;
      else if (filter === 3) val = (raw + Math.floor((left + up) / 2)) & 0xff;
      else if (filter === 4) val = (raw + paeth(left, up, upLeft)) & 0xff;
      pixels[dstOffset++] = val;
    }
  }
}

// Find logo boundaries
let minX = width, maxX = 0, minY = height, maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    const r = pixels[idx], g = pixels[idx+1], b = pixels[idx+2];
    if (Math.max(r, g, b) > 60) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

// Add small 20px padding
const pad = 24;
const cropX = Math.max(0, minX - pad);
const cropY = Math.max(0, minY - pad);
const cropW = Math.min(width - cropX, (maxX - minX) + pad * 2);
const cropH = Math.min(height - cropY, (maxY - minY) + pad * 2);

const bgR = 26, bgG = 26, bgB = 26;
const rawLines = [];

for (let y = 0; y < cropH; y++) {
  rawLines.push(0);
  for (let x = 0; x < cropW; x++) {
    const origX = cropX + x;
    const origY = cropY + y;
    const idx = (origY * width + origX) * 4;
    const r = pixels[idx], g = pixels[idx+1], b = pixels[idx+2];
    const diff = Math.max(Math.abs(r - bgR), Math.abs(g - bgG), Math.abs(b - bgB));
    let alpha = 0;
    if (diff > 40) {
      alpha = 255;
    } else if (diff > 10) {
      alpha = Math.round(((diff - 10) / 30) * 255);
    }
    rawLines.push(r, g, b, alpha);
  }
}

const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = ((c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1));
  }
  crcTable[n] = c;
}

function makeChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 'ascii');
  data.copy(chunk, 8);
  let c = ~0;
  for (let i = 4; i < 8 + len; i++) {
    c = (c >>> 8) ^ crcTable[(c ^ chunk[i]) & 0xff];
  }
  chunk.writeInt32BE(~c, 8 + len);
  return chunk;
}

const deflated = zlib.deflateSync(Buffer.from(rawLines));
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(cropW, 0);
ihdr.writeUInt32BE(cropH, 4);
ihdr[8] = 8;
ihdr[9] = 6;
ihdr[10] = 0;
ihdr[11] = 0;
ihdr[12] = 0;

const pngHeader = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const transparentPng = Buffer.concat([
  pngHeader,
  makeChunk('IHDR', ihdr),
  makeChunk('IDAT', deflated),
  makeChunk('IEND', Buffer.alloc(0))
]);

const outDir = path.join(__dirname, '../public/logo');
fs.writeFileSync(path.join(outDir, 'ark-transparent.png'), transparentPng);
console.log('Saved transparent PNG:', transparentPng.length, 'bytes. Dimensions:', cropW, 'x', cropH);

const b64 = transparentPng.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${cropW} ${cropH}" width="100%" height="100%" fill="none">
  <!-- ARK Monogram Logo - Authentic Vector Container -->
  <image href="data:image/png;base64,${b64}" width="${cropW}" height="${cropH}" preserveAspectRatio="xMidYMid meet" />
</svg>`;
fs.writeFileSync(path.join(outDir, 'ark.svg'), svg);
console.log('Saved public/logo/ark.svg successfully!');
