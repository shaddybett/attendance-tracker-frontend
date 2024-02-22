import React, { useState } from 'react';
import './index'
const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [Admin, setAdmin] = useState(false);
  const [Teacher, setTeacher] = useState(false);
  const [Student, setStudent] = useState(false);

  const handleLogin = () => {
    if (email.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Please enter valid email and password.');
    }
  };

  return (
    <div>
      <h1 className='head'>MORINGA ATTENDANCE SYSTEM</h1>
      <div className='role'>
        <h2 className='head2'>Select Role</h2>
        <div2 className="div2 role-checkboxes">
          <label className='checkbox1'>
            Admin
            <input
              type="checkbox"
              checked={Admin}
              onChange={() => setAdmin(!Admin)}
            />
          </label>
          <label className='checkbox2'>
            Teacher
            <input
              type="checkbox"
              checked={Teacher}
              onChange={() => setTeacher(!Teacher)}
            />
          </label>
          <label className='checkbox3'>
            Student
            <input
              type="checkbox"
              checked={Student}
              onChange={() => setStudent(!Student)}
            />
          </label>
        </div2>
      </div>
      {!loggedIn ? (
        <div>
          <h1 className='logintitle'>Login</h1>
          <input className='input1'
            type="text"
            placeholder="janedoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ fontWeight: 'bold' }}
          />
          <input className='input2'
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ fontStyle: 'italic', fontWeight: 'bold' }}
          />
          <button type="button" className="btn1" onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Welcome, {email}!</h2>
          <button type="button" className="btn2" onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Loginpage;
