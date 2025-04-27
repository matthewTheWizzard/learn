import { ButtonHTMLAttributes } from 'react'
import s from './styles.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonType?: 'warning' | 'error'
}

export const Button = ({buttonType, ...rest}: ButtonProps ) => {
    const styles: Record<string, string> = {
        error: s.error,
        warning: s.warning,
        default: ''
    }
    return <button {...rest} className={`${s.button} ${styles[buttonType ?? 'default']}`} />
}