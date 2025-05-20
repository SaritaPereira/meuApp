import { useState } from 'react';

export default function Form() {
  const [to, setTo] = useState('Bob');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Submitting to ${to}: ${message}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:
        <input value={to} onChange={e => setTo(e.target.value)} />
      </label>
      <label>
        Message:
        <input value={message} onChange={e => setMessage(e.target.value)} />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}