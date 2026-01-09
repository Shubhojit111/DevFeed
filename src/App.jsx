

import Explore from './pages/Explore/Explore'
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Home/Profile'
import Notifications from './Notification'
import Messages from './Messages'
import NotFound from './Notfound'
import Landing from './pages/Home/Landing'
import Home from './pages/Home/Home.jsx'


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

