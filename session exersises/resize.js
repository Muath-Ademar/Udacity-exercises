const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const folderPath = './output';

if (fs.existsSync(folderPath)) {
  console.log('Folder exists');
} else {
  fs.mkdir('./output', { recursive: true }, (err) => {
    if (err) {
      console.error('Error creating folder');
    } else {
      console.log('Folder created successfully');
    }
  });
}

const sizes = process.argv.slice(2);

if (!sizes) {
  console.error('Please provide the size');
  process.exit(1);
}

fs.readdir('./input', (err, files) => {
  if (err) {
    console.error('Error reading directory');
    return;
  }
  console.log('Files in directory: ' + files);
  for (let i = 0; i < files.length; i++) {
    for (const size of sizes) {
      const outputFolder = `./output/${size}`;
      if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder, { recursive: true });
      }
      const ext = path.parse(files[i]).ext;
      const name = 'new-version-';
      let width, height;
      if (size.includes('x')) {
        const parts = size.split('x');
        width = parseInt(parts[0]);
        height = parseInt(parts[1]);
      } else {
        width = height = parseInt(size);
      }

      sharp(`./input/${files[i]}`)
        .resize({ width, height })

        .toFile(`${outputFolder}/${name}${i}.${ext}`)
        .then((file) => {
          console.log('File info: ', file);
        });
    }
  }
});
console.log(sizes);
