import { createElement } from "../../lib/create-element"
import s from './styles.module.scss'

const buttonTypeStyles = {
    'primary': s.buttonPrimary,
    'warning': s.buttonWarning,
    'danger': s.buttonDanger
}

/**
 * Creates an HTML button element with the given text, type and click event handler.
 *
 * @param {{ 
 *  text: string,
 *  type: 'primary' | 'warning' | 'danger', 
 *  onClick?: (event: MouseEvent) => void }
 * } props - An object containing key/value pairs of attributes to set on the button.
 * @returns {Element} The created button element.
 */
export const Button = (props = {}) => {
    const { text = '', type, onClick } = props
    const additionalClasses = buttonTypeStyles[type] ?? ''

    const root = createElement('button', { class: `${s.button} ${additionalClasses}` }, text)

    if (onClick) {
        root.addEventListener('click', onClick)
    }

    root.textContent = text
    return root
}
