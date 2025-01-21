import { eventEmitter } from "./event-emitter"

export const store = {
    state: {
        todoList: []
    },
}

eventEmitter.on('addTodo', todo => {
    store.state.todoList.push(todo)
})