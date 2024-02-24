import Navbar from './Navbar';    
import React, { useState } from 'react';

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
      <Navbar />  
        <h1>Moringa <br/> attendance system</h1>
        <div>
            <h2>Select Role</h2>
            <label>
            Admin
            <input
              type="checkbox"
              checked={Admin}
              onChange={() => setAdmin(!Admin)}
            />
          </label>
          <label>
            Teacher
            <input
              type="checkbox"
              checked={Teacher}
              onChange={() => setTeacher(!Teacher)}
            />
          </label>
          <label>
            Student
            <input
              type="checkbox"
              checked={Student}
              onChange={() => setStudent(!Student)}
            />
          </label>
        </div>
      {!loggedIn ? (
        <div>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="janedoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ fontStyle: 'italic', fontWeight: 'bold' }}
          />
          <input
            type="password"
        placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ fontStyle: 'italic', fontWeight: 'bold' }}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Welcome, {email}!</h2>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Loginpage;