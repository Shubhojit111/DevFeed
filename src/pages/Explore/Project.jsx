import React, { useState } from 'react'
import ProfilePic from '../../components/home/ProfilePic'
import { Star } from 'lucide-react'
import { log } from 'three'

const Project = ({name, caption, skills, bookmarked}) => {

    const [hasbookmarked, setHasbookmarked] = useState(false)
    const [bookmark, setBookmark] = useState(0)



  return (
    <div className="profile shrink-0 bar bg-[#151C23] w-full overflow-hidden  border border-white/10 hover:border-[#1183BA]/50 rounded-2xl flex gap-8  items-start justify-between px-5 py-3 hover:-translate-y-1.5  transition-all">

          <div className="flex flex-col gap-1.5 h-full  ">
            <h2 className='text-[16px]'>{name}</h2>
            <p className='text-gray-500 text-[16px] w-full '>{caption}</p>
            <div className="flex gap-5 ">
                {skills.map((skill)=>
                {
                  return <span key={skill} className='px-2.5 text-[13px] border border-white/10 py-0.5 text-[#0DA2E7] rounded-xl'>{skill}</span>
                })}
                
            </div>
          </div>

          <div className={`flex gap-2 h-full  cursor-pointer items-center ${hasbookmarked? "text-yellow-400" : null }`}
          onClick={()=>
                {
                  hasbookmarked? setBookmark(bookmark-1) : setBookmark(bookmark+1)
                  setHasbookmarked(!hasbookmarked)                    
                }
            }
            >
            <button 
            className='text-yellow-400'
            ><Star size={20} className={`${hasbookmarked? "fill-yellow-400 " : null }`}/>
            </button>
            {bookmark + bookmarked}    
          </div>

        </div>
  )
}

export default Project
