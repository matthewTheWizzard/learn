// function Hello(){
//     console.log(this)
// }

// Hello()

// const obj = {
//     a: 10,
//     foo: Hello
// }

// obj.foo()

function functionDeclaration() {
    console.log(this)
}
const functionExpression = function () {
    console.log(this)
}
const arrowFunction = () => {
    console.log(this)
}

const foo = {
    a: 10,
    functionDeclaration: functionDeclaration,
    functionExpression: functionExpression,
    arrowFunction: arrowFunction,

    basicFunction() {
        console.log(this)
    }
}

// foo.functionDeclaration()
// foo.functionExpression()
// foo.arrowFunction()
// foo.basicFunction()

const bar = foo.basicFunction

bar()