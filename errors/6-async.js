
import fsPromises from 'fs/promises';

const nonexistentFilePath = 'nonexistent.txt';
const correctFilePath = 'exist.txt';

const random = Math.floor(Math.random() * 10);

const path = random > 5 ? nonexistentFilePath : correctFilePath;


async function processFiles() {
    try {
        return await fsPromises.readFile(path, 'utf8');
    } catch (error) {
        console.error('Произошла ошибка:', error.message);
    }
}

processFiles().then((data) => {
    console.log({ data });
});