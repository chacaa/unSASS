const testFile = './test.css';
const postcss = require('postcss');
const fs = require('fs');
const treeManager = require('./treeManager.js');

module.exports = {
    unSASS: function(file = testFile, allVariables) {
        try {
            let cssFile = fs.readFileSync(file, 'utf8');
            let parsedCSS = postcss.parse(cssFile);
            return treeManager.getSASSTree(parsedCSS, false);
        } catch (error) {
            return { 
                variables: null, 
                superClasses: null, 
                tree: null, 
                toString: null, 
                error 
            };
        }
    }
}
