"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gs = __importStar(require("ghostscript-node"));
const image_size_1 = __importDefault(require("image-size"));
async function renderPdf(data) {
    var _a;
    if (typeof data.file === 'string')
        data.file = Buffer.from(data.file, 'base64');
    const pages = await gs.renderPDFPagesToPNG(data.file, undefined, undefined, (_a = data.resolution) !== null && _a !== void 0 ? _a : 300);
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
