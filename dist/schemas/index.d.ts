declare const _default: {
    buildPdf: {
        type: string;
        required: string[];
        properties: {
            files: {
                type: string;
                minItems: number;
                items: {
                    type: string;
                    description: string;
                };
            };
            pages: {
                type: string;
                minItems: number;
                items: {
                    type: string;
                    required: string[];
                    properties: {
                        origin: {
                            type: string;
                            required: string[];
                            properties: {
                                file: {
                                    type: string;
                                    minimum: number;
                                    description: string;
                                };
                                page: {
                                    type: string;
                                    minimum: number;
                                    description: string;
                                };
                            };
                        };
                        modifications: {
                            type: string;
                            items: {
                                type: string;
                                oneOf: {
                                    required: string[];
                                    properties: {
                                        type: {
                                            enum: string[];
                                        };
                                        degrees: {
                                            enum: number[];
                                        };
                                    };
                                }[];
                            };
                        };
                    };
                };
            };
        };
    };
    renderPdf: {
        type: string;
        required: string[];
        properties: {
            file: {
                type: string;
                description: string;
            };
            resolution: {
                type: string;
                minimum: number;
                description: string;
            };
        };
    };
};
export default _default;
