const createCell = ({x, y, isActive}) => ({
    x,
    y,
    isActive,
    __proto__: cellProto
})

const cellProto = {
  activate() {
    this.isActive = true
},
  getState() {
    return {
        x: this.x,
        y: this.y,
        isActive: this.isActive
    };
  }
}
const cell_1 = createCell({x: 0, y: 0, isActive: false})
cell_1.activate()
console.dir(cell_1)