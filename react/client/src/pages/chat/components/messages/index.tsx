
import { useParams } from 'react-router';
import { MessageHistory } from '../../../../api';
import { useFetch } from '../../../../shared/hooks/useFetch';
import { mapApiMessageToView } from './mappers';
import s from './styles.module.css';

export const Messages = () => {
    const { id } = useParams()
    const { data, isLoading } = useFetch<MessageHistory>(`http://localhost:3001/messages/${id}`, {
        enable: !!id
    })
    
    if (!id) return null
    return (
        <div className={s.container}>
            <h2>Message history</h2>
            <div>
                {isLoading && <div>Loading...</div>}
                {data
                    ?.messages
                    ?.map(message => (
                        <Message message={mapApiMessageToView(message)}/>
                    ))
                }
                {!isLoading && data === null && (
                    <div>No messages to show</div>
                )}
            </div>
        </div>
    )
}

export type MessageView = {
    message: string;
    from: {
        id: string;
        name: string;
    };
    status: "UNREAD" | "READ"
}
type MessageProps = {
    message: MessageView
}
export const Message = ({ message: _message }: MessageProps) => {
    const { from, message } = _message;
    return (<div className={s.messageContainer}>
        <div className={s.messageHeader}>
            <div>{from.name}</div>
        </div>
        <p>
            {message}
        </p>
        <div className={s.messageFooter}></div>
    </div>)
}