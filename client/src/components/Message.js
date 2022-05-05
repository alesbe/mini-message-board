import './Message.css';
import React from 'react'

const Message = ({ title, author, body, date }) => {
  return (
    <div className='message__container'>
        <div className='message__row'>
          <h2 className='message__title'>{title}</h2>
          <p className='message__author'>{author}</p>
        </div>
        <p className='message__body'>{body}</p>
        <p className='message__date'>{date}</p>
    </div>
  )
}

export default Message