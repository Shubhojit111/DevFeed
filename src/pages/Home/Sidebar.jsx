import {
  Home, Search, Bell, Mail, Bookmark, TrendingUp, Users, User, Settings, Plus,
  Edit,
  Code,
  Code2
} from "lucide-react"
import { NavLink } from "react-router-dom";
import Profilepic from "/profile.jpg";

export default function LeftSidebar() {
 


  return (
    <aside className="bg-[#11171C] no-scrollbar h-full w-fit  fixed top-0 left-0  border-r border-r-gray-300/20">
      <aside className="h-screen w-full  bordr text-white flex flex-col justify-between p-5 pt-10 rounded-3xl">

        {/* LOGO */}
        <div>

            <NavLink to="/" className="flex items-center gap-3 px-2 mb-8 cursor-pointer">
              <div className="w-13 h-13 rounded-xl bg-linear-to-tr from-cyan-400 to-violet-500 flex items-center justify-center text-2xl font-bold text-white">
              <Code2 size={30} />
            </div>
            <div>
              <h2 className=" text-xl">Dev<span className="text-blue-500 font-bold">Feed</span></h2>
              <p className="text-[16px] text-gray-400">Connect & Share</p>
            </div>
            </NavLink>


          {/* NAV */}
          <nav className="flex flex-col h-fit gap-1 w-full rounded-xl ">

            <div className="sidebarNav flex flex-col gap-1">


              <div className="sidebarNav flex flex-col gap-1">

                {/* HOME */}
                <NavLink to="/app">
                  {({ isActive }) => (
                    <div className={`navs w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive ? "bg-[#161b22] text-blue-500 font-semibold "  : "text-gray-400 hover:bg-[#161b22] hover:text-white"}`}>
                      <Home size={20} />
                      <p className="text-[15px]">Home</p>
                      <span className={`ml-auto w-2 h-2 bg-blue-500 rounded-full ${isActive ? "opacity-100" : "opacity-0"}`} />
                    </div>
                  )}
                </NavLink>

                {/* EXPLORE */}
                <NavLink to="/explore">
                  {({ isActive }) => (
                    <div className={`navs w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive ? "bg-[#161b22] text-blue-500 font-semibold "  : "text-gray-400 hover:bg-[#161b22] hover:text-white"}`}>
                      <Search size={20} />
                      <p className="text-[15px]">Explore</p>
                      <span className={`ml-auto w-2 h-2 bg-blue-500 rounded-full ${isActive ? "opacity-100" : "opacity-0"}`} />
                    </div>
                  )}
                </NavLink>

                {/* NOTIFICATIONS */}
                <NavLink to="/notifications">
                  {({ isActive }) => (
                    <div className={`navs w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive ? "bg-[#161b22] text-blue-500 font-semibold "  : "text-gray-400 hover:bg-[#161b22] hover:text-white"}`}>
                      <Bell size={20} />
                      <p className="text-[15px]">Notifications</p>
                      <span className={`ml-auto w-2 h-2 bg-blue-500 rounded-full ${isActive ? "opacity-100" : "opacity-0"}`} />
                    </div>
                  )}
                </NavLink>

                {/* MESSAGES */}
                <NavLink to="/messages">
                  {({ isActive }) => (
                    <div className={`navs w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive ? "bg-[#161b22] text-blue-500 font-semibold "  : "text-gray-400 hover:bg-[#161b22] hover:text-white"}`}>
                      <Mail size={20} />
                      <p className="text-[15px]">Messages</p>
                      <span className={`ml-auto w-2 h-2 bg-blue-500 rounded-full ${isActive ? "opacity-100" : "opacity-0"}`} />
                    </div>
                  )}
                </NavLink>

                {/* SAVED */}
                <NavLink to="/saved">
                  {({ isActive }) => (
                    <div className={`navs w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive ? "bg-[#161b22] text-blue-500 font-semibold "  : "text-gray-400 hover:bg-[#161b22] hover:text-white"}`}>
                      <Bookmark size={20} />
                      <p className="text-[15px]">Saved</p>
                      <span className={`ml-auto w-2 h-2 bg-blue-500 rounded-full ${isActive ? "opacity-100" : "opacity-0"}`} />
                    </div>
                  )}
                </NavLink>

                {/* TRENDING */}
                <NavLink to="/trending">
                  {({ isActive }) => (
                    <div className={`navs w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive ? "bg-[#161b22] text-blue-500 font-semibold "  : "text-gray-400 hover:bg-[#161b22] hover:text-white"}`}>
                      <TrendingUp size={20} />
                      <p className="text-[15px]">Trending</p>
                      <span className={`ml-auto w-2 h-2 bg-blue-500 rounded-full ${isActive ? "opacity-100" : "opacity-0"}`} />
                    </div>
                  )}
                </NavLink>

                {/* COMMUNITIES */}
                <NavLink to="/communities">
                  {({ isActive }) => (
                    <div className={`navs w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive ? "bg-[#161b22] text-blue-500 font-semibold "  : "text-gray-400 hover:bg-[#161b22] hover:text-white"}`}>
                      <Users size={20} />
                      <p className="text-[15px]">Communities</p>
                      <span className={`ml-auto w-2 h-2 bg-blue-500 rounded-full ${isActive ? "opacity-100" : "opacity-0"}`} />
                    </div>
                  )}
                </NavLink>

                {/* PROFILE */}
                <NavLink to="/profile">
                  {({ isActive }) => (
                    <div className={`navs w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive ? "bg-[#161b22] text-blue-500 font-semibold "  : "text-gray-400 hover:bg-[#161b22] hover:text-white"}`}>
                      <User size={20} />
                      <p className="text-[15px]">Profile</p>
                      <span className={`ml-auto w-2 h-2 bg-blue-500 rounded-full ${isActive ? "opacity-100" : "opacity-0"}`} />
                    </div>
                  )}
                </NavLink>

                {/* SETTINGS */}
                <NavLink to="/settings">
                  {({ isActive }) => (
                    <div className={`navs w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive ? "bg-[#161b22] text-blue-500 font-semibold "  : "text-gray-400 hover:bg-[#161b22] hover:text-white"}`}>
                      <Settings size={20} />
                      <p className="text-[15px]">Settings</p>
                      <span className={`ml-auto w-2 h-2 bg-blue-500 rounded-full ${isActive ? "opacity-100" : "opacity-0"}`} />
                    </div>
                  )}
                </NavLink>

              </div>


            </div>



          </nav>
        </div>

        
        <div className=" flex py-3 flex-col gap-5 rounded-2xl bg-[#0f141a] border-2 border-white/5 hover:border-white/10 transition-all">
          <div className="px-3 pb-0  flex items-center gap-8">

            <div className="flex gap-2 items-center">
              <img
              src={Profilepic}
              className="w-11 h-11 border  border-blue-500 rounded-full object-cover"
            />

            <div className="flex flex-col leading-tight">
              <span className="text-md font-medium text-white">Shubhojit Deb</span>
              <span className="text-xs text-gray-400">@deb.dev</span>
            </div>
            </div>

            <button className="ml-auto cursor-pointer hover:text-blue-500  text-white transition">
              <Edit size={20}/>
            </button>

          </div>

          <div className="flex px-3 pt-0 text-xs justify-between">
            <h2><b>23.5k</b> <span className=" text-gray-400">&nbsp;followers</span></h2>
            <h2><b>189</b> <span className=" text-gray-400">&nbsp;following</span></h2>
          </div>
        </div>


      </aside>
    </aside>
  )
}
