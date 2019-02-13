import  React  from 'react';
import  ReactDOM  from 'react-dom';
const fs = require('fs');
const md = require('markdown').markdown;
let fileCont = '';

fileCont = fs.readFileSync('./post/demo.md', 'utf8');
console.log(md);
fileCont = md.toHTML(fileCont);
// console.log(fileCont);


ReactDOM.render(
    <div className="md_code" dangerouslySetInnerHTML={{ __html: fileCont }}></div>,
    document.getElementById('docApp')
);