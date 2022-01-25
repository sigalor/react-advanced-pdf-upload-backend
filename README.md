# react-advanced-pdf-upload-backend

[![GitHub license](https://img.shields.io/github/license/sigalor/react-advanced-pdf-upload-backend)](https://github.com/sigalor/react-advanced-pdf-upload-backend/blob/master/LICENSE) [![npm](https://img.shields.io/npm/v/react-advanced-pdf-upload-backend)](https://www.npmjs.com/package/react-advanced-pdf-upload-backend)

The backend which provides the actual PDF editing functionality for the AdvancedPdfUpload component from [react-advanced-pdf-upload](https://github.com/sigalor/react-advanced-pdf-upload).

## Getting started

Please refer to the readme of the [react-advanced-pdf-upload](https://github.com/sigalor/react-advanced-pdf-upload) repository to see the server-side code from this library in action.

For immediately trying this server out, run the following after cloning this repository, which starts a simple server on http://localhost:3001:

```
npm install
npm start
```

Note that this library relies on the [ghostscript-node](https://www.npmjs.com/package/ghostscript-node) module for working with PDFs, so make sure that all its dependencies are installed locally on your system.

## Documentation

However, this library is designed to be included in any other sort of NodeJS-based backend, as it exports its functions. First run

```
npm install react-advanced-pdf-upload-backend
```

Then import the functions like this. The input schemas for the two functions can be found [here](/src/schemas) and the corresponding TypeScript types are [here](/src/types.ts).

```javascript
import { methods, schemas } from "react-advanced-pdf-upload-backend";

(async () => {
  // renders a PDF document's pages to PNGs (the input schema can be found in "schemas.renderPdf")
  await methods.renderPdf(...);

  // builds a PDF document from individual (possibly modified) pages (the input schema can be found in "schemas.buildPdf")
  await methods.buildPdf(...);
})();
```

You can find a simple Express server that works with these components [here](/server/index.js).

## License

MIT
