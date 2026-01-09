
import { useState } from 'react'
import ProfilePic from './ProfilePic'
import { Bookmark, Ellipsis, Forward, MessageCircle, Share, ThumbsUp, X } from 'lucide-react'

const FeedContent = ({ caption, image, video }) => {

    const [like, setLike] = useState(0)
    const [hasliked, setHasliked] = useState(false)

    const [comment, setComment] = useState(0)
    
    const [share, setShare] = useState(0)
    const [hasshared, setHasshared] = useState(false)

    const [saved, setSaved] = useState(false)
    





    return (
        <div className=' bg-[#151C23] border border-white/10 rounded-xl px-5 py-2 text-white min-h-fit w-full flex flex-col justify-between'>

            <div className="feed-top pb-3 pt-3 h-fit  relative flex justify-between items-center ">
                <div className="flex gap-3 text-start">
                    <div className="pic h-13 w-13 rounded-full overflow-hidden ">
                        <ProfilePic />
                    </div>
                    <div className="data ">
                        <h1 className='font-bold  text-lg'>Shubhojit Deb</h1>
                        <h4 className=' text-[13px] opacity-85 flex gap-2'>
                            <p>@Deb.dev</p>
                            <p>2h ago</p>
                        </h4>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="">
                        <Ellipsis />
                    </div>

                    <div className="cross">
                        <X />
                    </div>
                </div>




            </div>

            {caption &&
            <div className="feedtext pb-3 text-left text-md whitespace-pre-wrap wrap-break-word">
                {caption}
            </div>
            }


            {(image || video) && (
                <div className="feed-img py-1 pb-2 bg-[#404854 w-full overflow-hidden my-2 ">

                    {image && (
                        <img
                            src={image}
                            className="rounded-xl max-h-140 w-full object-cover"
                        />
                    )}

                    {video && (
                        <video
                            src={video}
                            controls
                            className="rounded-xl max-h-112.5 w-full object-cover"
                        />
                    )}

                </div>
            )}




            <div className="feed-bottom pt-3 pb-3 border-t border-white/10 flex justify-between ">

                <div className="flex text-md">
                    
                    <div className={`like flex gap-1.5 items-center rounded-xl  hover:bg-[#1D262F] cursor-pointer hover:text-[#1183BA] px-3 py-1.5 
                    `}
                    
                    onClick={()=>
                        {
                            
                            setLike(hasliked? like-1 : like+1)
                            setHasliked(!hasliked)
                            
                            console.log(hasliked);
                            console.log(like)
                            
                        }
                        }
                        >
                        <ThumbsUp size={20} className={`${hasliked? " fill-[#1183BA] text-[#1183BA] " : " "}`}/>
                        <p>{like+6592}</p>
                    </div>

                    <div className="like flex gap-1.5 items-center rounded-xl  hover:bg-[#1D262F] cursor-pointer hover:text-[#eb1313] px-3 py-1.5 ">
                        <MessageCircle size={20} />
                        <p>254</p>
                    </div>
                    
                    <div className="like flex gap-1.5 items-center rounded-xl  hover:bg-[#1D262F] cursor-pointer hover:text-[#0dee24] px-3 py-1.5 "
                    onClick={()=>
                    {
                        setShare(hasshared? share-1 : share+1) 
                        setHasshared(!hasshared)
                    }
                    }>
                        <Forward className={`${hasshared? "fill-[#0dee24] text-[#0dee24]" : " "} `}/>
                        <p>{share+83}</p>
                    </div>

                </div>



                <div className="hover:bg-[#1D262F] cursor-pointer px-2.5 py-2  hover:text-[#d58421] rounded-xl"
                
                onClick={()=>
                {
                    setSaved(!saved)
                }
                }

                >
                    <Bookmark className={`${saved? "fill-[#d58421] text-[#d58421]" : " " }`}/>
                </div>

            </div>

        </div>
    )
}





export default FeedContent
