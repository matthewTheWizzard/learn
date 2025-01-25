import { eventEmitter } from "./event-emitter"

export const store = {
    state: {
        todoList: []
    },

    addTodo(todo) {
        this.state.todoList.push(todo)
        eventEmitter.emit('addTodo', todo)
    },
    removeTodo(id) {
        this.state.todoList = this.state.todoList.filter(item => item.id !== id)
        eventEmitter.emit('removeTodo', id)

        console.log(`state: ${JSON.stringify(this.state)}`)
    }
}
