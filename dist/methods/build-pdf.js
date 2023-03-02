"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", { value: true });
const gs = __importStar(require("ghostscript-node"));
async function buildPdf(data) {
    var _a;
    data.files = data.files.map(f => (typeof f === 'string' ? Buffer.from(f, 'base64') : f));
    const pages = [];
    for (const pageDef of data.pages) {
        if (!data.files[pageDef.origin.file]) {
            throw new Error('page index out of range: ' + pageDef.origin.file);
        }
        let newPage = await gs.extractPDFPages(data.files[pageDef.origin.file], pageDef.origin.page + 1, pageDef.origin.page + 1);
        let rotation = ((_a = pageDef.modifications) !== null && _a !== void 0 ? _a : []).filter(m => m.type === 'rotate').reduce((sum, m) => sum + m.degrees, 0) % 360;
        if (rotation < 0)
            rotation += 360;
        if (rotation !== 0) {
            newPage = await gs.rotatePDF(newPage, rotation.toString());
        }
        pages.push(newPage);
    }
    return await gs.combinePDFs(pages);
}
exports.default = buildPdf;
