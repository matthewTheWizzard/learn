import { Messages } from "./components/messages"
import { UsersList } from "./components/users"
import s from './styles.module.css'

export const ChatPage = () => {
    return (
        <div>
            <h1>Chat Page</h1>
            <div className={s.panel}>
                <div className={s.box}>
                    <h2>Users</h2>
                    <UsersList />
                </div>

                <div className={`${s.box} ${s.chat}`}>
                    <h2>Chat</h2>
                    <Messages />
                </div>
            </div>
        </div>
    )
}
