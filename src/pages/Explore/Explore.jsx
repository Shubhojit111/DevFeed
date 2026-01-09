import React from 'react'
import LeftSidebar from '../Home/Sidebar'
import RightSidebar from '../Home/RightSidebar'
import { Filter, FilterX, Layers, Search, SortAsc, Users } from 'lucide-react'
import ProfilePic from '../../components/home/ProfilePic'
import Profile from '../Home/Profile'
import ExploreProfiles from './ExploreProfiles'
import { ChevronsLeftRightEllipsis } from 'lucide-react';

const Explore = () => {
  return (
    <div className='bg-[#0F141A] w-full h-screen '>
      <LeftSidebar />

      <div className="explore no-scrollbar h-full  w-full  px-20 overflow-y-scroll py-6  flex flex-col  gap-6 items-center  ">

        <div className="head bg-[#151C23] w-[45%] border border-white/10 flex flex-col gap-5 p-5 rounded-3xl">
          <div className="text-2xl font-bold ">
            <h1 className='tracking-[4px]'>Explore...</h1>
          </div>

          <div className=" flex gap-4 ">
            <div className="flex items-center w-full bg-muted/30 border-border-subtle focus:border-primary/50 outline-none border border-white/10 px-3 py-3 gap-3 rounded-2xl active:border-[#1183BA] hover:border-[#1183BA]">
              <Search size={20} />
              <input
              placeholder="Search developers, topics, or projects..."
              className="outline-none w-full "
            />
            </div>

            <button className="filter flex justify-center items-center">
              <Filter size={30} />
            </button>
          </div>

        </div>

        <div className="bar bg-[#151C23] w-[45%] overflow-hidden  border border-white/10 rounded-3xl flex  items-center justify-around text-center text-[15px] shrink-0">

          <div className='hover:bg-[#24303b] hover:text-[#1183BA] transition-all  w-full py-3 flex items-center justify-center gap-2'>
            <Users size={20}/>
            <span>Developers</span>
          </div>
          <div className='hover:bg-[#1D262F] hover:text-[#1183BA] transition-all w-full py-3 flex items-center justify-center gap-2'>
            <Layers size={20}/>
            <span>Topics</span>
          </div>
          <div className='hover:bg-[#1D262F]  hover:text-[#1183BA] transition-all w-full py-3 flex items-center justify-center gap-2'>
            <ChevronsLeftRightEllipsis />
            <span>Projects</span>
          </div>
      

        </div>


        <div className="w-[45%] flex flex-col gap-6">
          <ExploreProfiles 
            profilepic="https://images.unsplash.com/photo-1766678003099-9df6ac5f3749?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            name="Shubhojit Deb" 
            username="@deb.dev" 
            position="FrontEnd Dev" 
            company="Techzuno" 
            skill1="ReactJS" 
            skill2="GSAP" 
            followerscount={69} />

          <ExploreProfiles
            profilepic="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=500"
            name="Aman Verma"
            username="@aman.codes"
            position="Frontend Engineer"
            company="Zomato"
            skill1="ReactJS"
            skill2="Tailwind"
            followerscount={142}
          />

          <ExploreProfiles
            profilepic="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500"
            name="Ritika Sharma"
            username="@ritika.dev"
            position="UI Developer"
            company="Paytm"
            skill1="NextJS"
            skill2="Figma"
            followerscount={98}
          />

          <ExploreProfiles
            profilepic="https://images.unsplash.com/photo-1548142813-c348350df52b?w=500"
            name="Krishna Mehta"
            username="@kunal.builds"
            position="Full Stack Developer"
            company="CRED"
            skill1="NodeJS"
            skill2="MongoDB"
            followerscount={211}
          />

          <ExploreProfiles
            profilepic="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500"
            name="Sneha Paul"
            username="@sneha.codes"
            position="Frontend Developer"
            company="Swiggy"
            skill1="ReactJS"
            skill2="GSAP"
            followerscount={167}
          />

          <ExploreProfiles
            profilepic="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500"
            name="Rohit Das"
            username="@rohit.dev"
            position="Web Developer"
            company="Infosys"
            skill1="HTML"
            skill2="CSS"
            followerscount={84}
          />

          <ExploreProfiles
            profilepic="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500"
            name="Anjali Roy"
            username="@anjali.ui"
            position="Product Designer"
            company="Flipkart"
            skill1="Figma"
            skill2="UX"
            followerscount={190}
          />

          <ExploreProfiles
            profilepic="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500"
            name="Arjun Patel"
            username="@arjun.next"
            position="Frontend Engineer"
            company="Razorpay"
            skill1="NextJS"
            skill2="Framer Motion"
            followerscount={156}
          />



        </div>


      </div>

      <RightSidebar />
    </div>
  )
}

export default Explore
