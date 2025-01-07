import fsPromises from 'fs/promises';

const nonexistentFilePath = 'nonexistent.txt';
const correctFilePath = 'exist.txt';

const random = Math.floor(Math.random() * 10);

const path = random > 5 ? nonexistentFilePath : correctFilePath;

fsPromises.readFile(path, 'utf8')
    .then((data) => {
        console.log({ data });
    })
    .catch((error) => {
        console.error('Ошибка при чтении файла:', error.message);
    });