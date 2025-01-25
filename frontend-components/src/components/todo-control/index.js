import { createElement } from "../../lib/create-element"
import { eventEmitter } from "../../lib/event-emitter"
import { store } from "../../lib/store"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { getRandomID } from "../../utils"
import s from './style.module.scss'

export const TodoControl = () => {
    const AddButton = Button({ text: 'Add', type: 'primary', onClick: () => {
        const text = AddInput.value
        const itemId = getRandomID()

        store.addTodo({ text, id: itemId })
        AddInput.value = ''
    } })
    const AddInput = Input()

    eventEmitter.on('addTodo', () => {
        console.log('Add todo from TodoControl')
    })

    const root = createElement('div', { class: s.todoControl }, AddInput, AddButton)

    return root
}