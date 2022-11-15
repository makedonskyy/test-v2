import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PersonForm() {
  const [input, setInput] = useState({ name: '', login: '', tel: '' });
  const navigate = useNavigate();
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v1/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(input),
    });
    if (response.ok) {
      const data = await response.json();
      navigate('/');
    }
  };
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="mb-3" style={{ color: 'whitesmoke' }}>
          <label htmlFor="exampleInputEmail1" className="form-label">
            ФИО
            <input value={input.name} onChange={inputHandler} name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </label>
        </div>
        <div className="mb-3" style={{ color: 'whitesmoke' }}>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email-адрес
            <input value={input.login} onChange={inputHandler} name="login" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </label>
        </div>
        <div className="mb-3" style={{ color: 'whitesmoke' }}>
          <label htmlFor="exampleInputPassword1" className="form-label">
            Телефон
            <input value={input.tel} onChange={inputHandler} name="tel" type="tel" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Отправить</button>
      </form>

    </div>
  );
}
