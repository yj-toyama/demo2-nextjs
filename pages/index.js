import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  async function fetchDataJava() {
    const response = await fetch('http://localhost:8000/api/hellojava');
    const data = await response.text();
    setMessage(data);
  }

  async function fetchDataGo() {
    const response = await fetch('http://localhost:8001/api/hellogo');
    const data = await response.text();
    setMessage(data);
  }

  return (
    <div>
      <button onClick={fetchDataJava}>Call Java API</button>
      <button onClick={fetchDataGo}>Call Go API</button>
      <p>{message}</p>
    </div>
  );
}
