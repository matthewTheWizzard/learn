/**
 * Promise API version of last error first
 */

// Преобразуем функцию в Promise
const validateInput = (input) => {
    return new Promise((resolve, reject) => {
        if (typeof input !== 'number') {
            reject(new Error('Input must be a number'));
        } else {
            resolve(true);
        }
    });
};

const foo = async () => {
    const random = Math.floor(Math.random() * 10);

    const input = random > 5 ? 'строка' : 5;

    try {
        const valid = await validateInput(input);
        return { input, valid };
    } catch (error) {

        console.error(error)
    }
};

foo().then((res) => console.log('Результат через промис: ', res))
