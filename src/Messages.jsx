import { Search, Send } from "lucide-react";
import LeftSidebar from "./Pages/Home/Sidebar";
import RightSidebar from "./Pages/Home/RightSidebar";
import { useState } from "react";


const chatUsers = [
  { id: 1, name: "Aman Verma", last: "Hey bro 👋" },
  { id: 2, name: "Ritika Sharma", last: "Loved your UI!" },
  { id: 3, name: "Krishna Mehta", last: "Let’s collab!" },
];



const Messages = () => {
  const [active, setActive] = useState(chatUsers[0]);
  const [msg, setMsg] = useState("");
  const [chats, setChats] = useState({
    1: [{ from: "them", text: "Hey bro 👋" }],
    2: [{ from: "them", text: "Loved your UI!" }],
    3: [{ from: "them", text: "Let’s collab!" }],
  });

  const send = () => {
    if (!msg.trim()) return;
    setChats({
      ...chats,
      [active.id]: [...(chats[active.id] || []), { from: "me", text: msg }],
    });
    setMsg("");
  };

  return (
    <div className=" bg-[#0F141A] py-6 w-full h-screen flex justify-center gap-2 ">

      <LeftSidebar />

      <div className=" w-[52%] h-full bg-[#151C23] rounded-3xl overflow-hidden flex ">

        {/* Chat List */}
        <div className=" w-[35%] border-r border-white/10 p-4 flex flex-col gap-4">
          <div className=" flex items-center gap-3 bg-[#0F141A] p-3 rounded-xl">
            <Search size={18} />
            <input placeholder="Search chats..." className=" bg-transparent outline-none w-full text-sm" />
          </div>

          {chatUsers.map(u => (
            <div
              key={u.id}
              onClick={() => setActive(u)}
              className={`p-3 rounded-xl cursor-pointer hover:bg-[#1C2630] transition ${active.id === u.id && "bg-[#1C2630] "}`}
            >
              <h1 className=" text-sm font-medium">{u.name}</h1>
              <p className=" text-xs text-gray-400">{u.last}</p>
            </div>
          ))}
        </div>

        {/* Chat Window */}
        <div className=" flex-1 flex  flex-col">

          <div className=" p-4 border-b border-white/10 font-medium ">{active.name}</div>

          <div className=" flex-1 p-4 no-scrollbar overflow-y-scroll flex flex-col gap-2">
            {(chats[active.id] || []).map((m, i) => (
              <div
                key={i}
                className={`max-w-[70%] px-4 py-2 rounded-xl text-sm ${m.from === "me" ? "ml-auto bg-[#0DA2E7] text-black" : "bg-[#1C2630]"}`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className=" p-3 border-t border-white/10 flex items-center gap-3">
            <input
              value={msg}
              onChange={e => setMsg(e.target.value)}
              placeholder="Type a message..."
              className=" flex-1 bg-[#0F141A] rounded-xl px-4 py-2 outline-none"
              onKeyDown={e => e.key === "Enter" && send()}
            />
            <button onClick={send} className=" bg-[#0DA2E7] text-black p-2 rounded-xl hover:scale-95 transition">
              <Send size={18} />
            </button>
          </div>

        </div>
      </div>

      <RightSidebar />

    </div>
  );
};

export default Messages;
