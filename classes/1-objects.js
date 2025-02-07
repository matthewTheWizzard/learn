// 1) store data
const User = {
    id: 1,
    age: 30,
    name: 'John',
    password: 'password',
}


// 2) namespace
const sum = (a, b) => a + b
const substract = (a, b) => a - b

const MyMath = {
    sum,
    substract
}

MyMath.sum(5, 3)

// 3) data + logic (OOP)
const JohnUser = {
    name: 'John',
    surname: 'Wick',

    getFullName() {
        return `${JohnUser.name} ${JohnUser.surname}`
    },

    changeName(name) {
        JohnUser.name = name
    }
}

console.log(JohnUser.getFullName())
JohnUser.changeName('Jack')
console.log(JohnUser.getFullName())

//examples

const cell_1 = {
    x: 1,
    y: 1,

    isActive: false,

    activate() {
        cell_1.isActive = true
    },

    getState() {
        return {
            x: cell_1.x,
            y: cell_1.y,
            isActive: cell_1.isActive
        }
    }
}

const timer = {
    time: 0,

    start() {
        setInterval(() => {
            timer.time++
        }, 1000)
    }
}