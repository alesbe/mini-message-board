import './App.css';
import React, { useEffect, useState } from 'react'
import Message from './components/Message';
import MessageForm from './components/MessageForm';
import { useMessage } from './hooks/useMessage';

function App() {
  const { messages } = useMessage();
  
  return (
    <div className="wrapper">
      <h1 className='title'>Mini message board</h1>

      <MessageForm/>
      
      {
        messages.map((message, i) => {
          return <Message key={i}
                  title={messages[i]["title"]}
                  author={messages[i]["author"]}
                  body={messages[i]["body"]}
                  date={messages[i]["date"].slice(0, 10)}
                  />
        })
      }

      <div className='credits'>
        <a href="https://github.com/alesbe"><p>Made with ❤️ by alesbe!</p></a>
      </div>
    </div>
  );
}

export default App;