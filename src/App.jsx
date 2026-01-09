import React from 'react'
import Navbar from './components/home/Navbar'
import Home from './Pages/Home/Home'
import Explore from './Pages/Explore/Explore'
import { Route, Routes } from 'react-router-dom'
import Profile from './Pages/Home/Profile'
import Notifications from './Notification'
import Messages from './Messages'
import NotFound from './Notfound'
import Landing from './Pages/Home/Landing'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/app' element={<Home />} />
      <Route path='/explore' element={<Explore />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/notifications' element={<Notifications />} />
      <Route path="/messages" element={<Messages />} />

      

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App

