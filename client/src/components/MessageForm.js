import './MessageForm.css';
import React from 'react'
import { useMessage } from '../hooks/useMessage';

const MessageForm = () => {
  const { createMessage } = useMessage();

  return (
    <form className="form__container" onSubmit={ createMessage }>
        <div className="form__row">
          <input name='author' id="iAuthor" placeholder='Author' type="text" maxLength="20" required></input>
          <input name='title' id="iTitle" placeholder='Title' type="text" maxLength="30" required></input>
        </div>

        <div className="form__row body__row">
          <textarea name='body' id="iBody" placeholder='Message' type="text" maxLength="450" required></textarea>
        </div>

        <button type="submit">Submit</button>
    </form>
  )
}

export default MessageForm