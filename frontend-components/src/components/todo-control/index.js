import { createElement } from "../../lib/create-element"
import { eventEmitter } from "../../lib/event-emitter"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import s from './style.module.scss'

export const TodoControl = () => {
    const AddButton = Button({ text: 'Add', type: 'primary', onClick: () => {
        const text = AddInput.value
        eventEmitter.emit('addTodo', text)
        AddInput.value = ''
    } })
    const AddInput = Input()

    const root = createElement('div', { class: s.todoControl }, AddInput, AddButton)

    return root
}