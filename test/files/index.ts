import fs from 'fs-extra';
import path from 'path';

export type FileMap = { [name: string]: Buffer };

export async function getFiles(): Promise<FileMap> {
  const fileNames = (await fs.readdir(__dirname)).filter(f => f !== 'index.ts');
  const files: FileMap = {};

  for (let fileName of fileNames) {
    files[fileName] = await fs.readFile(path.join(__dirname, fileName));
  }

  return files;
}
