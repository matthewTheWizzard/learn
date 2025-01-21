import { createElement } from "../../lib/create-element"
import s from './styles.module.scss'

export const Input = () => {
    const root = createElement('input', { class: s.input }, 'I am input')

    return root
}