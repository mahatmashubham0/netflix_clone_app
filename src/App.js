import React from 'react'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import SignIn from './pages/SignIn';
import Singup from './pages/Singup'

const App = () => {
  return (
    <Router>
        {/* Header */}
        <Routes>
          <Route path='/' element={<SignIn />}/>
          <Route path='/signup' element={<Singup />}/>
        </Routes>

    </Router>
  )
}

export default App