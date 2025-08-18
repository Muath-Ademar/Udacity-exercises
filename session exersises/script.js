const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];

if (!filePath) {
  console.error('Please enter a file path');
  process.exit(1);
}
const file = path.resolve(filePath);

// const fileInfo = fs.stat
const fileName = path.parse(file).name;

fs.stat(file, (err, stats) => {
  if (!file) {
    console.error('error with file path: ' + err);
    return;
  } else {
    console.log('File Name: ' + path.basename(fileName));
    console.log('File extension: ' + path.extname(file));
    console.log('File last modified date: ' + stats.mtime);
    console.log(
      'File size: ' + (stats.size / (1024 * 1024)).toFixed(2) + ' MB'
    );
  }
});
