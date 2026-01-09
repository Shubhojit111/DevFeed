import React, { useState } from 'react'
import ProfilePic from '../../components/home/ProfilePic'
import { log } from 'three'

const ExploreProfiles = ({profilepic, name, username, position, company, skill1, skill2, followerscount}) => {

  const [followers, setFollowers] = useState(followerscount)

  const [hasfollowed, setHasfollowed] = useState(false)
  


  return (
    <div className="profile shrink-0 bar bg-[#151C23] w-full overflow-hidden  border border-white/10 hover:border-[#1183BA]/50 rounded-3xl flex  items-center justify-between px-5 py-4">

          <div className="flex gap-5 items-center">
            <div className="profilepic h-15 w-15 border border-[#1183BA] overflow-hidden rounded-full">
              {/* <ProfilePic /> */}
              <img src={profilepic} alt="profile pic" />
            </div>

            <div className="info flex flex-col">
              <div className="flex gap-2 items-center">
                <h2 className='text-blue-500 text-[19px] font-semibold hover:underline'>{name}</h2>
                <p className='text-gray-500 text-[15px]'>{username}</p>
              </div>
              <span className='text-gray-500 mt-0.5 mb-2 text-[15px]'>{position} @{company}</span>
              <div className="skills flex gap-4 text-xs">
                <div className="btn bg-[#1D262F] cursor-pointer text-[#1183BA] px-3 py-1 font-semibold rounded-full">{skill1}</div>
                <div className="btn bg-[#1D262F] cursor-pointer text-[#1183BA] px-3 py-1 font-semibold rounded-full">{skill2}</div>
              </div>
            </div>
          </div>

          <div className="follow flex gap-5 h-full items-center text-center justify-center">
           <div className="">
              <b>{followers}</b>
               
             <h1 className='text-[14px]'>followers</h1>
           </div>

            <div className="btn bg-[#0E95D3] hover:scale-110 px-4 py-3 rounded-xl text-black items-center flex hover:text-white"
                onClick={()=>
                {
                  hasfollowed? setFollowers(followers-1) : setFollowers(followers+1)
                  setHasfollowed(!hasfollowed)
                }
                }
            >
              {
                hasfollowed? "Following" : "Follow"
              }
            </div>
          </div>

        </div>
  )
}

export default ExploreProfiles
