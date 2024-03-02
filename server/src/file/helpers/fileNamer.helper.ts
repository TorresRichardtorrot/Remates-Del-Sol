// Importa uuid
import { v4 as uuid } from 'uuid';

// Define la función multipleFileNamer
export const multipleFileNamer = (
  _req: Express.Request,
  files: Express.Multer.File[],
  callback: (error: Error | null, filenames: string[]) => void,
) => {
  if (!files || files.length === 0)
    return callback(new Error('Files are empty'), []);

  // Genera un nombre único para cada archivo en el array
  const filenames = files.map((file) => {
    const fileExtension = file.mimetype.split('/')[1];
    return `${uuid()}.${fileExtension}`;
  });

  callback(null, filenames);
};
