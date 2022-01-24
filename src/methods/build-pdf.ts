import gs from 'ghostscript-node';
import { BuildPdfData, RotateModification } from '../types';

export default async function buildPdf(data: BuildPdfData): Promise<Buffer> {
  data.files = data.files.map(f => (typeof f === 'string' ? Buffer.from(f, 'base64') : f));

  const pages: Buffer[] = [];
  for (const pageDef of data.pages) {
    if (!data.files[pageDef.origin.file]) {
      throw new Error('page index out of range: ' + pageDef.origin.file);
    }

    let newPage = await gs.extractPDFPages(
      <Buffer>data.files[pageDef.origin.file],
      pageDef.origin.page + 1,
      pageDef.origin.page + 1,
    );
    for (const generalModDef of pageDef.modifications ?? []) {
      if (generalModDef.type === 'rotate') {
        const modDef = <RotateModification>generalModDef;
        if (modDef.degrees !== 0) {
          newPage = await gs.rotatePDF(newPage, <'90' | '180' | '270'>modDef.degrees.toString());
        }
      }
    }
    pages.push(newPage);
  }

  return await gs.combinePDFs(pages);
}
