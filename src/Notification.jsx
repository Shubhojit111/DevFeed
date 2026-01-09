import { Bell, BellDot, BellElectric, BellIcon, BellRing, Heart, MessageCircle, UserPlus } from "lucide-react";
import LeftSidebar from "./Pages/Home/Sidebar";
import RightSidebar from "./Pages/Home/RightSidebar";


const Notifications = () => {
  return (
    <div className="bg-[#0F141A] w-full h-screen flex justify-center gap-2">

      <LeftSidebar />


      <div className="h-full w-[52%] overflow-y-scroll no-scrollbar px-8 py-6 flex flex-col gap-5">

        <h1 className="text-2xl font-semibold text-white flex items-center gap-2">
          <BellRing color="blue" /> Notifications
        </h1>

        {/* Notification Card */}
        <div className="bg-[#151C23] p-4 rounded-2xl flex items-center gap-4 hover:bg-[#1B2530] transition">
          <UserPlus className="text-blue-400" />
          <p><span className="font-medium text-white">Ritika Sharma</span> started following you.</p>
          <span className="ml-auto text-xs text-gray-400">2h ago</span>
        </div>

        <div className="bg-[#151C23] p-4 rounded-2xl flex items-center gap-4 hover:bg-[#1B2530] transition">
          <Heart className="text-pink-400" />
          <p><span className="font-medium text-white">Aman Verma</span> liked your post.</p>
          <span className="ml-auto text-xs text-gray-400">5h ago</span>
        </div>

        <div className="bg-[#151C23] p-4 rounded-2xl flex items-center gap-4 hover:bg-[#1B2530] transition">
          <MessageCircle className="text-green-400" />
          <p><span className="font-medium text-white">Krishna Mehta</span> commented on your post.</p>
          <span className="ml-auto text-xs text-gray-400">1d ago</span>
        </div>

      </div>

      <RightSidebar />
    </div>
  );
};

export default Notifications;
