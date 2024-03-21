var ImageKit = require("imagekit");

var imagekit = new ImageKit({
  publicKey: "public_gkPbyKgZlAzLEh+N4QjuH1lJzYo=",
  privateKey: "private_KLXMquDly6NZvTLUjtAA0mYFRss=",
  urlEndpoint: "https://ik.imagekit.io/dqn1rnabh/",
});

const uploadImage = async (image) => {
  const file = imagekit.upload(
    {
      file: image.buffer, //required
      fileName: "my_file_name.jpg", //required
      tags: ["tag1", "tag2"],
    },
    function (error, result) {
      if (error) console.log(error);
      else console.log(result);
    }
  );

  console.log(file.url);
  return file.url;
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
  return thumbnailURL;
};

module.exports = { uploadImages, uploadThumbnail };
