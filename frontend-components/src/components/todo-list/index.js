import { createElement } from '../../lib/create-element';
import { ListItem } from '../list-item';
import s from './style.module.scss'
import { eventEmitter } from '../../lib/event-emitter';


export const TodoList = () => {
    let items = []

    eventEmitter.on('addTodo', ({ text, id }) => {
        items = [...items, ListItem({ text, id })]
        root.append(...items.map(item => item.root))
    })

    eventEmitter.on('removeTodo', (id) => {
        items = items.filter(item => item.id !== id)
        root.replaceChildren(...items.map(item => item.root))
    })

    const root = createElement('ul', { class: s.todoList }, ...items.map(item => item.root))

    return root
};