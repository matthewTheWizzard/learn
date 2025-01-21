import { createElement } from "../../lib/create-element"
import { Button } from "../../ui/button"
import s from './style.module.scss'

/**
 * Creates an HTML list item element with the given text and a remove button.
 *
 * @param {{ text: string }} props - An object containing key/value pairs of attributes to set on the element.
 * @returns {Element} The created list item element.
 */
export const ListItem = ({ text }) => {
    const RemoveButton = Button({ text: 'Remove', type: 'danger', onClick: () => alert('Remove') })
    const TextElement = createElement('span', { class: s.text }, text)
    
    const root = createElement('li', { class: s.listItem }, TextElement, RemoveButton)
    return root
}