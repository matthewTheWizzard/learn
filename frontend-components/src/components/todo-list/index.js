import { createElement } from '../../lib/create-element';
import { ListItem } from '../list-item';
import { store } from '../../lib/store';
import s from './style.module.scss'
import { eventEmitter } from '../../lib/event-emitter';

export const TodoList = () => {
    let items = store.state.todoList.map(item => ListItem({ text: item.text }))

    eventEmitter.on('addTodo', (text) => {
        items = [...items, ListItem({ text })]
        root.append(...items)
    })

    const root = createElement('ul', { class: s.todoList }, ...items)

    return root
};