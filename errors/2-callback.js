/**
 * Callback last error first Custom
 */

// callback(error, data)
const validateInput = (input, callback) => {
    if (typeof input !== 'number') {
        callback(new Error('Input must be a number'));
    } else {
        callback(null, true);
    }
}

const foo = (callback) => {
    const random = Math.floor(Math.random() * 10);

    const input = random > 5 ? 'строка' : 5;

    validateInput(input, (error, valid) => {
        if (error) {
            return callback({ input, valid: false });
        }
        callback({ input, valid });
    });
};

foo((result) => {
    console.log('Результат через колбэк:', result);
});