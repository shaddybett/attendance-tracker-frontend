import React from 'react'
import Form from './Form'
import Admin from './Admin'
import Loginpage from './Loginpage'
import Student from './Student'
import Poping from './Poping'
import NavBar from './Navbar'
import Editing from './ProfileEditing'
import Teacher from './Teacher'
import {Routes, Route} from 'react-router-dom'






function App() {
  return (
    <div>
      
       <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/form" element={<Form />} />
        <Route path="/student" element={<Student />} />
        <Route path="/poping" element={<Poping />} />
         <Route path="/navbar" element={<NavBar />} />
         <Route path="/edit" element={<Editing />} />
         <Route path="/teacher" element={<Teacher />} />
       </Routes>
    </div>
    
  )
}

export default App