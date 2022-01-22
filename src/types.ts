export type RotateModification = {
  type: 'rotate';
  degrees: 0 | 90 | 180 | 270;
};

export type Modification = RotateModification;

export type BuildPdfData = {
  files: (string | Buffer)[];
  pages: {
    origin: {
      file: number;
      page: number;
    };
    modifications?: Modification[];
  }[];
};

export type RenderPdfData = {
  file: string | Buffer;
  resolution: number;
};

export type RenderPdfOutput = {
  pages: string[]; // base64-encoded PNGs
};
