const createCell = ({x, y, isActive}) => ({
    x,
    y,
    isActive,
    activate() {
        this.isActive = true
    },
    getState() {
        return {
            x: this.x,
            y: this.y,
            isActive: this.isActive
        }
    }
})

const cell_1 = createCell({x: 0, y: 0, isActive: false})
const cell_2 = createCell({x: 1, y: 0, isActive: true})

console.dir({
    cell_1,
    cell_2,
})

cell_1.activate()
console.dir(cell_1)