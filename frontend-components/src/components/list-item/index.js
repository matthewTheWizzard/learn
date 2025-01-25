import { createElement } from "../../lib/create-element"
import { eventEmitter } from "../../lib/event-emitter"
import { store } from "../../lib/store"
import { Button } from "../../ui/button"
import s from './style.module.scss'

/**
 * Creates an HTML list item element with the given text and a remove button.
 *
 * @param {{ text: string, id: string }} props - An object containing key/value pairs of attributes to set on the element.
 * @returns {Element} The created list item element.
 */
export const ListItem = ({ text, id }) => {
    const onRemoveTodo = () => {
        store.removeTodo(id)
        eventEmitter.emit('removeTodo', id)
    }

    const RemoveButton = Button({ text: 'Remove', type: 'danger', onClick: onRemoveTodo })
    const TextElement = createElement('span', { class: s.text }, text)
    
    const root = createElement('li', { class: s.listItem }, TextElement, RemoveButton)
    
    return {
        root,
        id
    }
}