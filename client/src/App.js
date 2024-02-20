import React from 'react'
import Form from './Form'
import ProfileForm from './Profile'


import Admin from './Admin'

import Loginpage from './Loginpage'



function App() {
  return (
    <div>
      <Loginpage/>
      <h1>Application</h1>
      <Form />
    
      <ProfileForm />
      
      <Admin />

    </div>
    
  )
}

export default App