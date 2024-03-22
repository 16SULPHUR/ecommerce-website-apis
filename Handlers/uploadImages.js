var ImageKit = require("imagekit");

var imagekit = new ImageKit({
  publicKey: "public_gkPbyKgZlAzLEh+N4QjuH1lJzYo=",
  privateKey: "private_KLXMquDly6NZvTLUjtAA0mYFRss=",
  urlEndpoint: "https://ik.imagekit.io/dqn1rnabh/",
});

const uploadImage = async (image) => {
  return new Promise((resolve, reject) => {
    imagekit.upload(
      {
        file: image.buffer, // required
        fileName: image.originalname, // required
      },
      function (error, result) {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          // console.log(result);
          resolve(result);
        }
      }
    );
  });
};


// const uploadImage = async (image) => {
//   const { uploadFile } = await import("@uploadcare/upload-client");

//   const file = await uploadFile(image.buffer, {
//     publicKey: "1bf395a5c5b0e02359fe",
//     fileName: image.originalFileName,
//     contentType: "image/jpeg",
//   });

//   console.log(file.cdnUrl);
//   return file.cdnUrl;
// };

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
  const thumbnailURL = await uploadImage(thumbnail);
  return thumbnailURL.thumbnailUrl;
};

module.exports = { uploadImages, uploadThumbnail, uploadImage };
