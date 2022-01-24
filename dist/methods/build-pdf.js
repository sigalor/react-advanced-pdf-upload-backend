"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ghostscript_node_1 = __importDefault(require("ghostscript-node"));
async function buildPdf(data) {
    var _a;
    data.files = data.files.map(f => (typeof f === 'string' ? Buffer.from(f, 'base64') : f));
    const pages = [];
    for (const pageDef of data.pages) {
        if (!data.files[pageDef.origin.file]) {
            throw new Error('page index out of range: ' + pageDef.origin.file);
        }
        let newPage = await ghostscript_node_1.default.extractPDFPages(data.files[pageDef.origin.file], pageDef.origin.page + 1, pageDef.origin.page + 1);
        for (const generalModDef of (_a = pageDef.modifications) !== null && _a !== void 0 ? _a : []) {
            if (generalModDef.type === 'rotate') {
                const modDef = generalModDef;
                if (modDef.degrees !== 0) {
                    newPage = await ghostscript_node_1.default.rotatePDF(newPage, modDef.degrees.toString());
                }
            }
        }
        pages.push(newPage);
    }
    return await ghostscript_node_1.default.combinePDFs(pages);
}
exports.default = buildPdf;
