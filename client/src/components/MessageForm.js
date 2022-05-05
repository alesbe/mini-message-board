import './MessageForm.css';
import React from 'react'

const MessageForm = () => {
  return (
    <form className="form__container">
        <div className="form__row">
          <input id="iAuthor" placeholder='Author' required></input>
          <input id="iTitle" placeholder='Title' required></input>
        </div>

        <div className="form__row body__row">
          <textarea id="iBody" placeholder='Message' required></textarea>
        </div>

        <button>Submit</button>
    </form>
  )
}

export default MessageForm