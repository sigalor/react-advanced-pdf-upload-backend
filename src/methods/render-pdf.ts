import gs from 'ghostscript-node';
import { RenderPdfData, RenderPdfOutput } from '../types';

export default function buildPdf({ file }: RenderPdfData): RenderPdfOutput {
  if (typeof file === 'string') file = Buffer.from(file, 'base64');
  return { pages: [] };
}
