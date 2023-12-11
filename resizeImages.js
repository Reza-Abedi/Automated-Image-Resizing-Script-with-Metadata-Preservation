import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Specify the folder path where your JPG images are located
const folderPath = 'C:\\Users\\Mreza.Abedi\\OneDrive\\Skrivbord\\several-images-metadata\\images';

// Specify the output folder for resized images
const outputFolder = 'C:\\Users\\Mreza.Abedi\\OneDrive\\Skrivbord\\several-images-metadata\\resized_images';

// Create the output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Get a list of files in the folder
const files = fs.readdirSync(folderPath);

// Filter out only JPG files
const jpgFiles = files.filter(file => path.extname(file).toLowerCase() === '.jpg');

// Resize and save JPG files while preserving metadata
jpgFiles.forEach(file => {
  const inputFilePath = path.join(folderPath, file);
  const outputFilePath = path.join(outputFolder, file);

  // Resize the image to a specific width (e.g., 800 pixels) while preserving metadata
  sharp(inputFilePath)
    .resize({ width: 800, preserveMetadata: true })
    .toFile(outputFilePath, (err, info) => {
      if (err) {
        console.error(`Error resizing ${file}: ${err.message}`);
      } else {
        console.log(`Resized ${file} to ${info.width}x${info.height} and saved to ${outputFolder}`);
      }
    });
});

console.log('Resize process completed.');
