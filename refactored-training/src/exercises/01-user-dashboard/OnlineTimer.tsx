import { useEffect, useState } from "react";

export function OnlineTimer(){
    const [secondsOnline, setSecondsOnline] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setSecondsOnline((s) => s+1)
        }, 1000)
        return () => clearInterval(id)
    }, [])

    return <p>Time online: {secondsOnline}</p>

}