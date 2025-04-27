import { MessageView } from ".";
import { MessageHistory } from "../../../../api";

export const mapApiMessageToView = (message: MessageHistory['messages'][number]): MessageView => {
    const StatusDictionary = {
        unread: 'UNREAD',
        read: 'READ'
    } as const

    return ({
        message: message.message,
        from: {
            id: message.id,
            name: message.from,
        },
        status: StatusDictionary[message.status]
    })
}