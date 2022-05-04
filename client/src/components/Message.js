import './Message.css';
import React from 'react'

const Message = ({ title, author, body }) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{author}</p>
        <p>{body}</p>
    </div>
  )
}

export default Message