const uploadImage = async (image) => {
  const { uploadFile } = await import("@uploadcare/upload-client");

  const file = await uploadFile(image.buffer, {
    publicKey: "1bf395a5c5b0e02359fe",
    fileName: image.originalFileName,
    contentType: "image/jpeg",
  });

  console.log(file.cdnUrl);
  return file.cdnUrl;
};

const uploadImages = async (images) => {
  let cdnURLs = [];
  for (const image of images) {
    cdnURLs.push(await uploadImage(image));
  }

  console.log("cdnURLs array");
  console.log(cdnURLs);
  return cdnURLs;
};

const uploadThumbnail = async (thumbnail) => {
    const thumbnailURL = await uploadImage(thumbnail)
    return thumbnailURL
};

module.exports = {uploadImages, uploadThumbnail};
