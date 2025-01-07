import fs from 'fs';

const nonexistentFilePath = 'nonexistent.txt';
const correctFilePath = 'exist.txt';

const random = Math.floor(Math.random() * 10);

const path = random > 5 ? nonexistentFilePath : correctFilePath;

const foo = (callback) => {
    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            callback({ message: error.message })
        } else {
            callback({ data })
        }
    });
}

foo((result) => {
    console.log('Результат через FS колбэк:', result);
})
