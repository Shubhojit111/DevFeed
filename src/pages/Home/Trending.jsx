import { TrendingUp, Flame, Users, Briefcase, Hash, Highlighter, Scale } from "lucide-react";

const topics = [
  { id:1, tag: "#react", growth: "+42%", posts: "12.4k", },
  { id:2, tag: "#nextjs", growth: "+36%", posts: "9.1k", },
  { id:3, tag: "#tailwindcss", growth: "+28%", posts: "6.7k", },
  { id:4, tag: "#firebase", growth: "+31%", posts: "5.2k", },
  { id:5, tag: "#ai", growth: "+57%", posts: "18.3k", },

];

export default function Trending() {
  return (
    <main className="interests h-fit w-full px-4 py-2 border border-[#1F2933] rounded-xl text-white bg-[#13191F]">

      <h1 className="text-white text-xl font-semibold flex items-center gap-3 mb-4">
        <TrendingUp size={24} className={"text-blue-500"} /> Trending Topics
      </h1>
        
      <div className="trendingtopics flex flex-col gap-3">
        {topics.map((topic) => {
          return <div key={topic.id} className="topic flex items-center justify-between ">
            <div  className="">
              <div className="topicname text-[15px] font-bold text-white">
                {topic.tag}
              </div>

              <div className="topicposts text-[13px] text-gray-400">
                {topic.posts} posts
              </div>
            </div>

            <div className="growth w-fit bg-green-600 py-1 px-1.5 text-xs rounded-xl">
              {topic.growth}
            </div>

          </div>
        })}
      </div>
    </main>
  );
}
