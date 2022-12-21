


import React from 'react';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack5';
import pdfFile from "../assest/cv.pdf"

function App() {

return (
	<div>
	<Document file={pdfFile}>
		<Page pageNumber={1} />
	</Document>
	</div>
);
}

export default App;

