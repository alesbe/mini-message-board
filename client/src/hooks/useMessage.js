import { useEffect, useState } from 'react'
const axios = require('axios').default;

export const useMessage = () => {
    const [messages, setMessages] = useState([])
    const [resStatus, setResStatus] = useState("Fetching messages...")
  
    const serverUrl = "http://localhost:8000/message"

    const getMessages = () => {
        axios.get(serverUrl)
        .then((res) => {
            setMessages(res.data.messageDB);
            setResStatus("")
        })
        .catch((err) => {
            if(err.code === "ERR_NETWORK") {
                setResStatus("Couldn't reach message server :(")
            }

            console.log(err)
        })
    }

    const createMessage = (event) => {
        event.preventDefault();
        
        let author = event.target["author"].value;
        let title = event.target["title"].value;
        let body = event.target["body"].value;

        console.log(author, title, body)

        axios.post(serverUrl, null, {
            params: {
                author,
                title,
                body
            }
        })
        .then(res => {
            // Refresh if success
            window.location.reload();
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getMessages();
    }, [])

    return {
        messages,
        setMessages,
        resStatus,
        getMessages,
        createMessage
    }
}
