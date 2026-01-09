import React, { useState } from 'react'
import Profile from './Profile'
import LeftTabs from './LeftTabs'
import Post from './Post'
import Feed from './Feed'
import Story from './Story'
import Right from './Right'
import Interests from './Interests'
import LeftSidebar from './Sidebar'
import Trending from './Trending'
import RightSidebar from './RightSidebar'



const Home = () => {

  
  const [posts, setPosts] = useState([])

 const addpost = ({text, img, vid}) => {
  if (!text.trim() && !img && !vid) return
  setPosts(prev => [
    { 
      id: Date.now(), 
      postcaption:text, 
      postimage:img, 
      postvideo:vid
    }, 
    ...prev])
}

  

  return (
    <div className='home bg-[#0F141A] h-screen w-full gap-2 flex relative justify-center '>

     <LeftSidebar />

 
      <div className="center  pt-6 no-scrollbar h-full px-5 overflow-y-scroll  flex flex-col  gap-6 text-center border2 border-r-gray-300 ">
        
        <Post add={addpost}/>
        {/* <Story /> */}
        <Feed posts={posts}/>
      </div>
      


      <RightSidebar />
         
     

      </div>

    
  )
}

export default Home




