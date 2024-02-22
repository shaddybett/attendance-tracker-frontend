import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './Form';
import Loginpage from './Loginpage';
import Adminprofile from './Adminprofile';
import ProfileForm from './Profile';
import Admin from './Admin';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/admin" element={<Adminprofile />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <h1>Application</h1>
      <Form />
      <ProfileForm />
      <Admin />
    </div>
  );
}

export default App;
