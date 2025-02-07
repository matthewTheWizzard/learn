class Cell {
    constructor({x, y, isActive}) {
        this.x = x;
        this.y = y;
        this.isActive = isActive;
    }

    activate () {
        this.isActive = true
    }

    geState () {
        return {
            x: this.x,
            y: this.y,
            isActive: this.isActive
        }
    }
}


class Timer {
    time = 0

    interval = null
    constructor(defaultTime) {
        this.time = defaultTime || 0
    }

    start() {
        this.interval = setInterval(() => {
            this.time++
        }, 1000)
    }

    stop() {
        clearInterval(this.interval)
        this.interval = null
    }

    clear() {
        this.time = 0
    }
}

const timer_1 = new Timer(0)
const timer_2 = new Timer(5)

const cell_1 = new Cell({x: 0, y: 0, isActive: false})

cell_1.activate()
console.dir(cell_1)