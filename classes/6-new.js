function Cell({ x, y, isActive }) {
    this.x = x;
    this.y = y;
    this.isActive = isActive;
}

Cell.prototype.active = function () {
    this.isActive = true;
}

Cell.prototype.getState = function () {
    return {
        x: this.x,
        y: this.y,
        isActive: this.isActive
    }
}

const template = [{x: 1, y: 1, isActive: false}, {x: 2, y: 1, isActive: false}, {x: 3, y: 1, isActive: false}]

const cells = template.map(cell => new Cell(cell))

console.dir(cells)