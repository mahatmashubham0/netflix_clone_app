import React from 'react'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
        {/* Header */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<SignIn />}/>
          <Route path='/signup' element={<SignUp />}/>
        </Routes>

    </Router>
  )
}

export default App