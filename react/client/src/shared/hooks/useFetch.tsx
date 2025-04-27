import { useState } from "react"

type FetchParams = {
    enable: boolean
}

export const useFetch = <T,>(url: string, params?: FetchParams): {
    data: T | null,
    error: Error | null,
    isLoading: boolean
} => {
    const [localUrl, setLocalUrl] = useState(url)
    const [data, setData] = useState<null | T>(null)
    const [error, setError] = useState<null | Error>(null)
    const [isLoading, setIsLoading] = useState(true)

    if (url !== localUrl) {
        setData(null)
        setIsLoading(true)
        setError(null)
        setLocalUrl(url)
    }

    const enable = params?.enable === undefined ? true : params?.enable

    if (!data && !error && isLoading && enable && localUrl === url) {
        fetch(localUrl)
            .then(data => data.json())
            .then(data => setData(data))
            .catch(err => setError(err))
            .finally(() => setIsLoading(false))
    }

    return {
        data,
        error,
        isLoading
    }
}