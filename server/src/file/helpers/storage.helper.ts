import { diskStorage } from 'multer';
import { v4 as uuid } from 'uuid';
import { join } from 'path';

const destinationPath = join(__dirname, '../../../', 'public', 'img');

export const storage = diskStorage({
  destination: destinationPath,
  filename: (req, file, cb) => {
    if (!file) return cb(new Error('Files are empty'), undefined);
    const fileExtension = file.mimetype.split('/')[1];
    const newName = `${uuid()}.${fileExtension}`;
    // console.log(newName);
    cb(null, newName);
  },
});
