# Automated-Image-Resizing-Script-with-Metadata-Preservation
This Node.js script offers a streamlined solution for resizing a collection of JPG images within a designated folder while preserving their original metadata. 

Leveraging the powerful sharp library, the script combines efficiency with flexibility, allowing users to tailor the resizing process to their specific needs. The inclusion of the preserveMetadata: true option ensures that crucial image metadata, such as EXIF information, is retained throughout the resizing operation, maintaining the integrity of the image files.
Image resizing is a common requirement in various scenarios, from web development to content management. However, resizing images often comes at the cost of losing valuable metadata, potentially impacting the quality and context of the images. This script addresses this challenge by utilizing the sharp library and introducing the preserveMetadata: true option, enabling users to resize images without compromising their essential metadata.

## Features
### Metadata Preservation:
The script employs the sharp library's preserveMetadata: true option, allowing users to retain important metadata during the image resizing process.
### Customizable Resizing
Users can easily adjust the resizing parameters, such as width and height, to meet their specific requirements.
### Organized Output: 
Resized images are saved to a designated output folder, ensuring a clear separation from the original images.

## Usage
### Installation: 
### Dependency Installation: 
Run npm install sharp to install the necessary sharp library.
### Configuration: 
Set the folderPath variable to the folder containing the original JPG images and the outputFolder variable for the resized images.
### Execution: 
Run the script using the command node script_name.js.
Metadata Preservation with preserveMetadata: true:
### The script introduces the preserveMetadata: 
true option in the resize method of the sharp library. This option ensures that the original metadata of the images, including EXIF data and other relevant information, is retained throughout the resizing process. By preserving metadata, users can maintain the context, date, and other critical details associated with the images, enhancing the overall quality of the resized files.

Example:
Assuming a folder path of \images, the script resizes JPG files while preserving their metadata and saves the resized images to the resized_images folder.

## PLEASE NOTE THAT
This script not only simplifies the image resizing process but also goes a step further by preserving essential metadata. The inclusion of the preserveMetadata: true option empowers users to maintain the integrity of their images, making it a valuable tool for various applications, including web development, content creation, and digital asset management.

### Future Enhancements:
Potential improvements could include additional options for advanced image processing, such as quality adjustments, format conversions, and support for other image types.

### Acknowledgments:
The script relies on the sharp library, an open-source contribution that enhances image processing capabilities within Node.js environments.

### Disclaimer:
Users are encouraged to review and understand the implications of the resizing process, including the preservation of metadata. Always ensure proper backups are in place to avoid unintended data loss.
