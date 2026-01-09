import React from 'react'
import StoryBox from './StoryBox'
import { CirclePlus } from 'lucide-react'

const Story = () => {
  return (
    <div className='h-45 bg-[#14161D] border border-[#1F2933]  no-scrollbar bg-geen-700 flex gap-4 overflow-x-auto scroll-smooth justify-start rounded-xl '>
      
      <div className=' createstory bg-white w-30 rounded-xl relative h-full shrink-0 overflow-hidden cursor-pointer'>


        <div className="storycontent bg-cover  h-[75%] w-full">
          <img className='h-full w-full object-cover' src="profile.jpg" alt="" />
        </div>

        <div className="name text-sm w-full text-black absolute bottom-3 text-center  font-semibold">
          <h1 className=''>Create Story</h1>
        </div>

        <div className="add h-10 w-10 absolute top-[65%] left-1/2 -translate-x-1/2 rounded-full bg-blue-900 ">
          <svg className='h-full w-full ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus-icon lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
        </div>

      </div>
      {/* <StoryBox />
      <StoryBox />
      <StoryBox />
      <StoryBox />
      <StoryBox />
      <StoryBox />
      <StoryBox />  */}

    </div>
  )
}

export default Story
