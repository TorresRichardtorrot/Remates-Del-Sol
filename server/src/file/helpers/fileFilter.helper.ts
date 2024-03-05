export const fileFilter = (
  _req: Express.Request,
  file: Express.Multer.File,
  cb: (error: Error | null, acceptFiles: boolean) => void,
) => {
  if (!file) return cb(new Error('Files are empty'), false);

  const fileExtension = file.mimetype.split('/')[1];
  const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
  const value = validExtensions.includes(fileExtension);
  if (!value)
    return cb(
      new Error(`This type of file is not accepted ${fileExtension}`),
      false,
    );
  // console.log(value);
  cb(null, value);
};
