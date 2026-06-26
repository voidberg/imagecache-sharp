// Runtime smoke test: import the BUILT dist and run a real resize through the
// public API, asserting non-empty output. Runs on both Node and Bun.
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ImageCache } from '../dist/index.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const input = join(here, '..', 'examples', 'in.png');

const imagecache = new ImageCache([
  { presetName: 'thumb', actions: [{ action: 'scale', config: { width: 64 } }] },
]);

const image = await imagecache.render(input, 'thumb');
const { data, info } = await image.toBuffer({ resolveWithObject: true });

if (!data || data.length === 0) {
  throw new Error('smoke failed: empty output buffer');
}
if (info.width !== 64) {
  throw new Error(`smoke failed: expected width 64, got ${info.width}`);
}

const runtime =
  typeof Bun !== 'undefined' ? `Bun ${Bun.version}` : `Node ${process.version}`;
console.log(
  `smoke OK on ${runtime}: resized to ${info.width}x${info.height}, ${data.length} bytes`,
);
