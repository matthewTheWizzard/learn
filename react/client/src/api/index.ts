export type User = {
    "id": string,
    "name": string,
    "username": string,
    "password": string,
    "isLogged": boolean
}

export type MessageHistory = {
    id: string,
    messages: {
        from: string,
        id: string,
        message: string,
        status: "read" | "unread"
    }[]
}