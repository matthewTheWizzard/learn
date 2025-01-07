/**
 * Вариант обработки "ошибок" без выбрасывания исключения
 */

// const validateInput = (input) => {
//     if (typeof input !== 'number') {
//         return false
//     }
//     return true;
// }


// const foo = () => {
// 	const random = Math.floor(Math.random() * 10);

// 	const input = random > 5 ? 'строка' : 5;
	
// 	return {
// 		input,
// 		valid: validateInput(input)
// 	}
// }

// const result = foo();
// console.log({ result })

/**
 * Вариант обработки "ошибок" с выбрасывания исключения
 */

const validateInput = (input) => {
    if (typeof input !== 'number') {
        throw new Error('Input must be a number');
    }
    return true;
}

const foo = () => {
	const random = Math.floor(Math.random() * 10);

	const input = random > 5 ? 'строка' : 5;
	
	try {
		const valid = validateInput(input);

		return { input, valid }
	} catch (e) {
		// console.log(e)
		return { input, valid: false }
	}
}

const result = foo();
console.log({ result })