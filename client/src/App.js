import './App.css';
import React, { useEffect, useState } from 'react'
import Message from './components/Message';
const axios = require('axios').default;

function App() {
  const [messages, setMessages] = useState([])
  
  const serverUrl = "http://localhost:8000/message"
  
  const getMessages = () => {
    axios.get(serverUrl)
    .then((res) => {
      setMessages(res.data.messageDB);
      console.log(messages)
    })
    .catch((err) => {
      console.log(err)
      })
  }

  const createMessage = () => {
    
  }

  useEffect(() => {
    getMessages();
  }, [])
  
  return (
    <>
    <h1>Mini message board</h1>
    <button onClick={() => getMessages()}>Click me to get</button>
    
    {
      messages.map((message, i) => {
        return <Message key={i}
                title={messages[i]["title"]}
                author={messages[i]["author"]}
                body={messages[i]["body"]}
                />
      })
    }
    </>
  );
}

export default App;