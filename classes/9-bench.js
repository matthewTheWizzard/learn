function createCell({ x, y, isActive }) {
    return {
        x,
        y,
        isActive,
        activate() {
            this.isActive = true;
        },
        deactivate() {
            this.isActive = false;
        },
        changeX(x) {
            this.x = x;
        },
        changeY(y) {
            this.y = y;
        },
        getState() {
            return { x: this.x, y: this.y, isActive: this.isActive };
        }
    };
}

class Cell {
    constructor({ x, y, isActive }) {
        this.x = x;
        this.y = y;
        this.isActive = isActive;
    }

    activate() {
        this.isActive = true;
    }

    getState() {
        return { x: this.x, y: this.y, isActive: this.isActive };
    }

    deactivate() {
        this.isActive = false;
    }
    changeX(x) {
        this.x = x;
    }
    changeY(y) {
        this.y = y;
    }
}

function measureMemoryUsage(createFunction) {
    globalThis.gc();
    const startMemory = process.memoryUsage().heapUsed;

    const instances = Array.from({ length: 10_000 }, (_, i) =>
        createFunction({ x: i, y: i, isActive: false })
    );

    globalThis.gc();
    const endMemory = process.memoryUsage().heapUsed;

    return endMemory - startMemory;
}

console.log("Фабричная функция:", measureMemoryUsage(createCell), "байт");
console.log("Класс:", measureMemoryUsage((args) => new Cell(args)), "байт");
