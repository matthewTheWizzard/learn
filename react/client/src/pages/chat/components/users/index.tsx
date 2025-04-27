import { generatePath, useNavigate } from "react-router";
import { User } from "../../../../api";
import { useFetch } from "../../../../shared/hooks/useFetch";

import { Routes } from "../../../../config/router";
import s from './styles.module.css';

const sortUsersByLogin = (users: User[] | null) => {
    return users?.sort((a, b) => {
        return (a.isLogged === b.isLogged) ? 0 : a.isLogged ? -1 : 1;
    })
}

export const UsersList = () => {
    const {
        data,
        isLoading,
        error
    } = useFetch<User[]>('http://localhost:3001/users')

    return (
        <div>
            {isLoading ? <div>Loading...</div> : null}
            {error ? <div>{error.message}</div> : null}
            {sortUsersByLogin(data)?.map(item => (<UserListItem user={item} />))}
        </div>
    )
}

type UserListItemProps = {
    user: User
}
const UserListItem = ({ user }: UserListItemProps) => {
    const navigate = useNavigate()
    const handleGoToChat = async (id: string) => {
        await navigate(generatePath(Routes.chat, { id }))
    }

    return (<div
        onClick={async () => await handleGoToChat(user.id)}
        className={s.userItem}
    >
        <span>{user.name}</span>
        <span
            className={s.auth}
            style={{
                background: user.isLogged ? 'green' : 'red'
            }}
        />
    </div>)
}