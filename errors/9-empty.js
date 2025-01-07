const foo = () => {
    const data = null; // пришло откуда то

    try {
        const res = data.name;
        return res
    } catch {}
}


while(true) {
    const res = foo()

    if (res === undefined) {
        break
    }
}

console.log("AFTER")