import React from 'react'
import ProfilePic from '../../components/home/ProfilePic'

const StoryBox = () => {
  return (
    <div className=' bg-white w-35 rounded-xl relative h-full shrink-0 overflow-hidden cursor-pointer'>
      <div className="absolute top-2 left-2 h-10 w-10 border-3 border-green-400 rounded-full overflow-hidden">
        <ProfilePic />
      </div>

      <div className="storycontent bg-cover  h-full w-full">
        <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1767072528350-4211df85970a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>

      <div className="name absolute bottom-3 left-2 text-md text-white font-semibold">
        <h1>Shubhojit Deb</h1>
      </div>

    </div>
  )
}

export default StoryBox
