const path = require("path");

console.log(path.parse("./test1.txt"));

let obj = { root: '', dir: '.', base: 'test1.txt', ext: '.txt', name: 'test1' }

console.log(path.format(obj))