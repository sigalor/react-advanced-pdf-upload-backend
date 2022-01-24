import fs from 'fs-extra';
import path from 'path';

import { buildPdf } from '../src/methods';
import { getFiles, FileMap } from './files';

let files: FileMap;

beforeAll(async () => {
  files = await getFiles();
});

describe('buildPdf', () => {
  test('can concat and rotate a PDF', async () => {
    const res = await buildPdf({
      files: [files['test.pdf']],
      pages: [
        { origin: { file: 0, page: 0 } },
        {
          origin: { file: 0, page: 0 },
          modifications: [{ type: 'rotate', degrees: 90 }],
        },
        {
          origin: { file: 0, page: 0 },
          modifications: [{ type: 'rotate', degrees: 180 }],
        },
      ],
    });

    // TODO: no automated checking is possible here yet, because Ghostscript embeds the current
    // timestamp into the generated file, through which the output files' bytes are never
    // exactly the same
    await fs.writeFile(path.join(__dirname, 'files/buildPdf-output-concat-rotate.pdf'), res);
  });
});
