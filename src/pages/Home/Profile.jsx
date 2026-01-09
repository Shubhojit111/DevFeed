
import RightSidebar from './RightSidebar';
import LeftSidebar from './Sidebar';
import img from "../../../public/image.png";
import profile from "../../../public/profile.jpg";
import { BoomBox, Code, Github, Medal, Trophy, Twitter, X } from 'lucide-react';
import Project from '../Explore/Project';


const Profile = () => {

  const skills = ["React", "TailwindCSS", "GSAP", "Firebase", "C++", "Python","JS"]

  return (
    <div className='bg-[#0F141A] w-full h-full '>
      <LeftSidebar />

      <div className="no-scrollbar  w-full  px-20 overflow-y-scroll py-6  flex flex-col  gap-6 items-center ">
        <div className=" h-[33vw]  w-[45%] overflow-hidden rounded-2xl">
          <div className="imgwrapper h-30 w-full bg-[#142C3A] ">

          </div>

          <div className="main bg-[#151C23] h-fit relative pt-12 pb-8 px-8 flex flex-col gap-5">

            <img src={profile} alt="" className='h-24 w-24 border-8 border-[#151C23] rounded-full overflow-hidden absolute -top-12 object-cover' />

            <div className="flex justify-between ">
              <div className="data flex flex-col gap-1.5 text-[14px] text-gray-400">
                <h1 className='text-3xl text-white font-semibold'>Shubhojit Deb</h1>
                <p className=''>@deb.dev</p>
                <p className='text-[18px] text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, unde! Lorem ipsum dolor sit amet.</p>

                <div className=" flex gap-5">
                  <div className="flex gap-1">
                    <Github size={18} />
                    <p>vercel</p>
                  </div>
                  <div className="flex gap-1">
                    <Github size={18} />
                    <p>vercel</p>
                  </div>
                  <div className="flex gap-1">
                    <Github size={18} />
                    <p>vercel</p>
                  </div>
                </div>

                <p className='my-0.5'>joined on 69th july</p>

                <div className="flex gap-5">
                  <Github />
                  <Twitter />
                </div>


              </div>

              <div className="btns flex gap-2.5">
                <button className='bg-[#0F141A] font-medium text-[#0DA2E7] rounded-xl h-fit w-fit px-3 py-2 hover:scale-95 cursor-pointer'>Message</button>
                <button className='text-[#0F141A] font-medium bg-[#0DA2E7] rounded-xl h-fit w-fit px-3 py-2 hover:scale-95 cursor-pointer'>Follow</button>
              </div>
            </div>

            <div className="reach flex gap-4 items-center text-center">
              <div className="followers">
                <h1 className="text-2xl font-semibold">14.5k</h1>
                <p>Followers</p>
              </div>
              <div className="following">
                <h1 className="text-2xl font-semibold">189</h1>
                <p>Following</p>
              </div>
              <div className="posts">
                <h1 className="text-2xl font-semibold">68</h1>
                <p>Posts</p>
              </div>
              <div className="projects">
                <h1 className="text-2xl font-semibold">6</h1>
                <p>followers</p>
              </div>
            </div>

          </div>
        </div>

        <div className="skills   w-[45%] overflow-hidden rounded-2xl bg-[#151C23] justify-center p-5 gap-4 flex flex-col">
          <div className="flex gap-2 items-center ">
            <Code color='#0DA2E7' />
            <h1 className='text-white'> Skills & Technologies</h1>
          </div>

          <div className="skill flex gap-2.5">
            {/* <span className='text-[#0DA2E7] bg-[#142C3A] px-3.5 py-1  rounded-xl text-[14px] font-medium '>React</span>
            <span className='text-[#0DA2E7] bg-[#142C3A] px-3.5 py-1  rounded-xl text-[14px] font-medium '>React</span>
            <span className='text-[#0DA2E7] bg-[#142C3A] px-3.5 py-1  rounded-xl text-[14px] font-medium '>React</span>
            <span className='text-[#0DA2E7] bg-[#142C3A] px-3.5 py-1  rounded-xl text-[14px] font-medium '>React</span>
            <span className='text-[#0DA2E7] bg-[#142C3A] px-3.5 py-1  rounded-xl text-[14px] font-medium '>React</span>
            <span className='text-[#0DA2E7] bg-[#142C3A] px-3.5 py-1  rounded-xl text-[14px] font-medium '>React</span>
            <span className='text-[#0DA2E7] bg-[#142C3A] px-3.5 py-1  rounded-xl text-[14px] font-medium '>React</span> */}

            {skills.map(skill=>
              {
                return <span className='text-[#0DA2E7] bg-[#142C3A] px-3.5 py-1  rounded-xl text-[14px] font-medium '>{skill}</span>
              }
            )}
          </div>
        </div>

        <div className="projects h-fit w-[45%] overflow-hidden rounded-2xl bg-[#151C23] p-5 gap-4 flex flex-col">
         <div className="flex gap-2 items-center ">
            <Trophy color='#0DA2E7' size={18}/>
            <h1 className='text-white'>Featured Projects</h1>
          </div>

          <div className="projects flex flex-col gap-5">
            <Project name="DevFeed" caption="Built a LinkedIn-style social feed for developers with scalable multi-column layout, post system, profiles, and explore pages using modern WebDev tools." skill1="React" skill2="Tailwind" skill3="Firebase Auth" bookmarked={12}/>
            <Project name="Organic" caption="Developed a full multipage corporate/agency website with reusable layout architecture, responsive UI, and modern design system using modern WebDev tools." skill1="HTML" skill2="CSS" skill3="Javascript" bookmarked={20}/>
            <Project name="Waterly" caption="Designed and developed a premium commercial business website with modern UI, responsive layouts, and interactive animations" skill1="React" skill2="Tailwind" skill3="Firebase" bookmarked={7}/>
            <Project name="Portfolio" caption="Designed and built a modern responsive portfolio website to showcase projects, skills, and more ." skill1="HTML" skill2="Tailwind" skill3="Javascript" bookmarked={13}/>
          </div>

          </div>

      </div>

      <RightSidebar />
    </div>
  )
}

export default Profile
