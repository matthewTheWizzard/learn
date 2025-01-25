import { createElement } from "../../lib/create-element"
import { eventEmitter } from "../../lib/event-emitter";
import { store } from "../../lib/store";
import s from './style.module.scss'

export const Header = () => {
    const root = createElement('header', { class: s.header }, 'Header');

    const changeHeaderOnAdd = () => {
        console.log('Add todo from Header')
        root.textContent = `Header | Items:${store.state.todoList.length}`
    }

    const changeHeaderOnDelete = () => {
        console.log('Delete todo from Header')
        root.textContent = `Header | Items:${store.state.todoList.length}`
    }

    
    eventEmitter.on('addTodo', changeHeaderOnAdd)
    eventEmitter.on('removeTodo', changeHeaderOnDelete)
 
    return root
}
