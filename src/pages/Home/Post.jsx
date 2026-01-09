import { useState } from "react";
import ProfilePic from "../../components/home/ProfilePic";
import { Image, Link, Magnet, Sticker, Video, X } from "lucide-react";




const Post = ({ add }) => {
  const [post, setPost] = useState({
    text: "",
    img: null,
    vid: null
  })

  const [error, setError] = useState("")


  const tags = ["#react", "#firebase", "#nextjs"]

  return (
    <div className=" rounded-2xl h-fit flex gap-6 p-6 bg-[#151C23] border border-white/10">


      <div className="img h-11 w-11 flex shrink-0 rounded-full overflow-hidden">
        <ProfilePic />
      </div>

      <div className="flex flex-col h-fit w-full ">

        <textarea
          placeholder="What did you build today? 🚀"
          value={post.text}
          onChange={(e) => {
            const text = e.target.value

            if (text.length > 400) {
              setError("Post can't be more than 400 characters")
              return
            }

            setPost(prev => (
              { ...prev, text: text }
            ))

            setError("")

          }}


          className="w-[95%] min-h-fit resize-none overflow-hidden bg-transparent text-lg outline-none text-[#E5E7EB] placeholder:text-[#6B7280] placeholder:text-lg"
        />

        <p className={` my-3 text-xs text-right ${post.text.length > 350 ? "text-red-400" : "text-gray-400"
          }`}>
          {post.text.length} / 400
        </p>

        {(post.img || post.vid) && (
          <div className="mt-3 relative rounded-xl overflow-hidden border border-white/10">

            <button
              onClick={() => setPost(p => ({ ...p, img: null, vid: null }))}
              className="absolute top-2 right-2 bg-black/60 rounded-full p-1 text-white"
            >
              <X size={14} />
            </button>

            {post.vid ? (
              <video src={post.vid} controls className="w-full max-h-75 object-cover" />
            ) : (
              <img src={post.img} className="w-full max-h-75 object-cover" />
            )}

          </div>
        )}


        {error && <p className="text-red-400 text-sm mt-1">{error}</p>}


        <div className="tags flex flex-wrap gap-3 w-full justify-end ">
          {tags.map(tag => (
            <div key={tag} className="px-3 py-1 rounded-full bg-[#111827] text-xs text-[#9CA3AF] hover:bg-[#1F2933] cursor-pointer transition flex items-center gap-5">
              <span>{tag}</span>
            </div>
          ))}


          <span className="px-3  w-fit py-1 rounded-full border-2 border-dashed border-[#1F2933] text-sm text-[#6B7280] cursor-pointer">
            + Add tag
          </span>
        </div>


        <div className="flex flex-wrap justify-between items-center border-t border-t-white/10 mt-3 pt-3">
          <div className="flex gap-5 flex-wrap text-[#6B7280] text-lg ">

            <div className="addimage">
              <input type="file"
                accept="image/*"
                hidden
                id="uploadimage"
                onChange={(e) => {
                  const img = e.target.files[0]
                  if (!img) return
                  setPost(prev => ({ ...prev, img: URL.createObjectURL(img) }))
                }
                } />

              <label htmlFor="uploadimage"
                className="v text-green-600 cursor-pointer">
                <Image />

              </label>

            </div>

            <div className="addvideo">
              <input type="file"
                hidden
                id="uploadvideo"
                accept="video/*"
                onChange={(e) => {
                  const vid = e.target.files[0]
                  if (!vid) return
                  setPost(prev => ({ ...prev, vid: URL.createObjectURL(vid) }))
                }
                } />

              <label htmlFor="uploadvideo" className="v text-red-600 cursor-pointer">
                <Video />
              </label>
            </div>


            <button className="v text-orange-600 cursor-pointer">
              <Sticker />
            </button>

            <button className="v text-blue-600 cursor-pointer">
              <Magnet />
            </button>

            <button className="v text-violet-600 cursor-pointer">
              <Link />
            </button>

          </div>

          
            <button
              onClick={() => {
                if (!post.text.trim() && !post.img && !post.vid) return;
                add(post);
                setPost({ text: "", img: null, vid: null });


              }}
              className="px-6 py-2 rounded-xl font-semibold bg-linear-to-r from-[#21F6A1] to-[#5CC8FF] text-[#04130C] cursor-pointer">
              Post
            </button>
          
        </div>

      </div>
    </div>
  );
}


export default Post