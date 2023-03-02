/// <reference types="node" />
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
    name?: string;
};
export type RenderPdfData = {
    file: string | Buffer;
    resolution: number;
};
export type RenderPdfOutput = {
    pages: {
        uri: string;
        dimensions: {
            width: number;
            height: number;
        };
    }[];
};
