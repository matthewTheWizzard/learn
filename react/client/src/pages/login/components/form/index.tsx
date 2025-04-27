import { useState } from 'react';
import { Button } from '../../../../shared/ui/button';
import s from './styles.module.css';

export const LoginForm = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async () => {
        await fetch('http://localhost:3001/users', {
            method: 'POST',
            body: JSON.stringify({
                name,
                password
            })
        })
    }
    return (
        <div className={s.loginForm}>
            <h4>Login</h4>
            <input name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input name="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
            <Button onClick={onSubmit}>Login</Button>
        </div>
    )
}