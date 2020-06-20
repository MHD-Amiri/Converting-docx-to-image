const docxConverter = require('docx-pdf');
const path = require('path');
const pdf = require('pdf-poppler');

docxConverter('./test.docx', './output.pdf', (err, result) => {
    if (err) {
        console.log("Something went wrong in converting the File");
    } else {
        let file = './output.pdf'

        let opts = {
            format: 'jpeg',
            out_dir: path.dirname(file),
            out_prefix: path.basename(file, path.extname(file)),
            page: null
        }

        pdf.convert(file, opts)
            .then(res => {
                console.log('Successfully converted');
            })
            .catch(error => {
                console.error(error);
            })
    }
});