export type RotateModification = {
  type: 'rotate';
  degrees: -90 | 90;
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
  pages: {
    uri: string; // base64-encoded PNG (data URIs, i.e. they start with "data:image/png;base64,..."")
    dimensions: {
      width: number;
      height: number;
    };
  }[];
};
