export const fileFilter = (
  _req: Express.Request,
  file: Express.Multer.File[],
  cb: (error: Error | null, acceptFiles: boolean[]) => void,
) => {
  console.log({ file });
  if (!file || file.length === 0) return cb(new Error('Files are empty'), []);

  const acceptFiles: boolean[] = file.map((value) => {
    const fileExtension = value.mimetype.split('/')[1];
    const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    return validExtensions.includes(fileExtension);
  });

  cb(null, acceptFiles);
};
