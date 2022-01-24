"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ghostscript_node_1 = __importDefault(require("ghostscript-node"));
const image_size_1 = __importDefault(require("image-size"));
async function renderPdf(data) {
    var _a;
    if (typeof data.file === 'string')
        data.file = Buffer.from(data.file, 'base64');
    const pages = await ghostscript_node_1.default.renderPDFPagesToPNG(data.file, undefined, undefined, (_a = data.resolution) !== null && _a !== void 0 ? _a : 300);
    return {
        pages: pages.map(p => {
            const dim = (0, image_size_1.default)(p);
            return {
                uri: 'data:image/png;base64,' + p.toString('base64'),
                dimensions: {
                    width: dim.width,
                    height: dim.height,
                },
            };
        }),
    };
}
exports.default = renderPdf;
