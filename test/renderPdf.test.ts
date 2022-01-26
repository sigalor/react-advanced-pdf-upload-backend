import { renderPdf } from '../src/methods';
import { getFiles, FileMap } from './files';

let files: FileMap;

beforeAll(async () => {
  files = await getFiles();
});

describe('renderPdf', () => {
  test('works', async () => {
    const pages = (await renderPdf({ file: files['test.pdf'], resolution: 100 })).pages;
    expect(pages.length).toBe(1);
    expect(pages[0].uri.split(',')[1]).toBe(files['test-rendered-res100.png'].toString('base64'));
  });
});
