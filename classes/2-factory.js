// фарбичная функция/ factory function/method
const createCell = ({x, y, isActive}) => {
    const cell = {
        x,
        y,
        isActive,
        activate() {
            cell.isActive = true
        },
    
        getState() {
            return {
                x: cell.x,
                y: cell.y,
                isActive: cell.isActive
            }
        }
    }

    return cell
}

const cell_1 = createCell({x: 0, y: 0, isActive: false})
const cell_2 = createCell({x: 1, y: 0, isActive: false})
const cell_3 = createCell({x: 2, y: 0, isActive: false})
const cell_4 = createCell({x: 0, y: 1, isActive: false})
const cell_5 = createCell({x: 1, y: 1, isActive: false})
const cell_6 = createCell({x: 2, y: 1, isActive: false})

console.dir({
    cell_1,
    cell_2,
    cell_3,
    cell_4,
    cell_5,
    cell_6
})

cell_2.actions.activate()
console.dir(cell_2.actions.getState())