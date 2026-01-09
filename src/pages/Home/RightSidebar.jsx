import React from 'react'
import Interests from './Interests'
import Trending from './Trending'

const RightSidebar = () => {
  return (
    <aside className="bg-[#11171C] no-scrollbar h-full w-[18vw]  fixed top-0 right-0  border-r border-r-gray-300/20">
      <aside className="h-screen w-full  bordr text-white flex flex-col justify-between p-5 pt-10 rounded-3xl">
        <Trending />
        <Interests />
      </aside>
    </aside>
  )
}

export default RightSidebar
