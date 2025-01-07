class CustomError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.code = errorCode;
    }
}

const riskyOperation = () => {
    const random = Math.floor(Math.random() * 10);

    if (random === 1) {
        throw new Error('ЙА СЛОМАЛСЯ');
    }

    if (random === 2) {
        throw new CustomError('Бэк сломался', 400);
    }

    if (random === 3) {
        throw new CustomError('Ошибка 304', 304);
    }

    if (random === 4) {
        throw new CustomError('Не найдено', 404);
    }


    throw new CustomError('Ошибка в riskyOperation', 500);
}

try {
    riskyOperation();
} catch (error) {
    if (error instanceof CustomError) {
        if (error.code === 500) {
            console.error('Системная ошибка: ', error.message);
        } else {
            console.error(`Ошибка бизнес логики: ${error.code}, сообщение: ${error.message}`);
        }

    } else {
        console.error('Неизвестная ошибка:', error.message);
    }
}