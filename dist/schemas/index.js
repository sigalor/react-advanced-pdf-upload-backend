"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const build_pdf_json_1 = __importDefault(require("./build-pdf.json"));
const render_pdf_json_1 = __importDefault(require("./render-pdf.json"));
const render_pdf_output_json_1 = __importDefault(require("./render-pdf-output.json"));
exports.default = { buildPdf: build_pdf_json_1.default, renderPdf: render_pdf_json_1.default, renderPdfOutput: render_pdf_output_json_1.default };
