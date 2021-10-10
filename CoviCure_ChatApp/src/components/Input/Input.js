import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a Message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? ()=>{sendMessage(event);setMessage('')} : null}
    />
    <button className="sendButton" onClick={(e) => {sendMessage(e); setMessage('')}}>Send</button>
  </form>
)

export default Input;