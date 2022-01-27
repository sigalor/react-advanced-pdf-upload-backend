/// <reference types="node" />
export declare type RotateModification = {
    type: 'rotate';
    degrees: -90 | 90;
};
export declare type Modification = RotateModification;
export declare type BuildPdfData = {
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
export declare type RenderPdfData = {
    file: string | Buffer;
    resolution: number;
};
export declare type RenderPdfOutput = {
    pages: {
        uri: string;
        dimensions: {
            width: number;
            height: number;
        };
    }[];
};
