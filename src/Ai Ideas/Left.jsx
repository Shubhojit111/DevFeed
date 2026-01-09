export default function Left() {
  return (
    <aside className="hidden xl:block w-64 shrink-0 sticky top-24">

      <div className="bg-slate-950 border border-white/10 rounded-2xl p-4 text-center">
        <img
          src="https://i.pravatar.cc/150?img=12"
          className="w-20 h-20 rounded-full mx-auto border-2 border-green-400"
        />

        <h4 className="mt-3 text-white font-semibold">Deb Mukherjee</h4>
        <p className="text-gray-400 text-sm">@deb.dev</p>

        <div className="grid grid-cols-3 gap-3 my-4 text-white text-sm">
          <div><b>128</b><p className="text-gray-400">Posts</p></div>
          <div><b>1.2k</b><p className="text-gray-400">Followers</p></div>
          <div><b>180</b><p className="text-gray-400">Following</p></div>
        </div>

        <button className="w-full bg-green-400 text-black py-2 rounded-full font-medium hover:bg-green-300 transition">
          Edit Profile
        </button>
      </div>

      <div className="bg-slate-950 border border-white/10 rounded-2xl p-3 mt-4 flex flex-col gap-1">
        {["My Posts","Saved","Communities","Live Jams","Opportunities"].map(i=>(
          <button key={i} className="text-gray-300 text-sm text-left px-3 py-2 rounded-lg hover:bg-white/5">{i}</button>
        ))}
      </div>

      <div className="bg-slate-950 border border-white/10 rounded-2xl p-3 mt-4 flex flex-col gap-1">
        <button className="text-gray-300 text-sm text-left px-3 py-2 rounded-lg hover:bg-white/5">Dark Mode</button>
        <button className="text-gray-300 text-sm text-left px-3 py-2 rounded-lg hover:bg-white/5">Settings</button>
        <button className="text-red-400 text-sm text-left px-3 py-2 rounded-lg hover:bg-red-500/10">Logout</button>
      </div>

    </aside>
  );
}
