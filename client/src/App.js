import React from 'react'
import Loginpage from './Loginpage'
import Adminprofile from './Adminprofile'
import Form from './Form'
import { Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Loginpage />}/>
        <Route path="/admin" element={<Adminprofile />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </div>

  )
}

export default App
