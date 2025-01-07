const level1 = () => {
    throw new Error('Known2');
}

const level2 = () =>{
    try {
        level1();
    } catch (error) {
        if (error.message === 'Known') {
            console.warn('Обработали известную ошибку на уровне 2');
        } else {
            throw error;
        }
    }
}

const level3 = () => {
    try {
        level2();
    } catch (error) {
        console.error('Ошибка обработана на уровне 3:', error.message);
    }
}

level3();
