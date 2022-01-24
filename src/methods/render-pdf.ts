import gs from 'ghostscript-node';
import imageSize from 'image-size';
import { RenderPdfData, RenderPdfOutput } from '../types';

export default async function renderPdf(data: RenderPdfData): Promise<RenderPdfOutput> {
  if (typeof data.file === 'string') data.file = Buffer.from(data.file, 'base64');
  const pages = await gs.renderPDFPagesToPNG(data.file, undefined, undefined, data.resolution ?? 300);
  return {
    pages: pages.map(p => {
      const dim = imageSize(p);
      return {
        uri: 'data:image/png;base64,' + p.toString('base64'),
        dimensions: {
          width: dim.width!,
          height: dim.height!,
        },
      };
    }),
  };
}
