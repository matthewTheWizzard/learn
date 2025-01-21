import { createElement } from "../../lib/create-element"
import { eventEmitter } from "../../lib/event-emitter";
import { store } from "../../lib/store";
import s from './style.module.scss'

export const Header = () => {
    const root = createElement('header', { class: s.header }, 'Header');

    eventEmitter.on('addTodo', () => {
        console.log(store.state)
        root.textContent = `Header | Items:${store.state.todoList.length}`
    })
    return root
}