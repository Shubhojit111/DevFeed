import React, { useState } from 'react'
import ProfilePic from '../../components/home/ProfilePic'
import { Star } from 'lucide-react'

const Project = ({name, caption, skill1, skill2, skill3, bookmarked}) => {

    const [hasbookmarked, setHasbookmarked] = useState(false)



  return (
    <div className="profile shrink-0 bar bg-[#151C23] w-full overflow-hidden  border border-white/10 hover:border-[#1183BA]/50 rounded-2xl flex gap-8  items-start justify-between px-5 py-3 hover:-translate-y-2 hover:text-[#0DA2E7] transition-all">

          <div className="flex flex-col gap-1.5 h-full  ">
            <h2 className='text-[16px]'>{name}</h2>
            <p className='text-gray-500 text-[16px] w-full '>{caption}</p>
            <div className="flex gap-5 ">
                <span className='px-2.5 border border-white/10 py-0.5 rounded-xl'>{skill1}</span>
                <span className='px-2.5 border border-white/10 py-0.5 rounded-xl'>{skill2}</span>
                <span className='px-2.5 border border-white/10 py-0.5 rounded-xl'>{skill3}</span>
            </div>
          </div>

          <div className="flex gap-2 h-full items-center">
            <button onClick={()=>
                {
                    setHasbookmarked(!hasbookmarked)
                }
            }
            className='text-yellow-400 cursor-pointer'
            ><Star size={20} className={`${hasbookmarked? "fill-yellow-400" : "text-blue-500"} `}/>
            </button>
            <h1 onClick={()=>
                {
                    console.log(hasbookmarked)
                }
            }>{bookmarked}</h1>
           
          </div>

        </div>
  )
}

export default Project
