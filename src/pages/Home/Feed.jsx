import React from 'react'
import FeedContent from '../../components/home/FeedContent'
import axios, { Axios } from "axios";


const Feed = ({ posts }) => {

  const getData= async () =>{
    const response= await axios.get("https://dev.to/api/articles?per_page=10")
    const data =response.data
    console.log(data)
  }



  return (
    <>
      {posts.length < 1 ?
        (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg font-medium">No posts yet 👀</p>
            <p className="text-sm mt-1">Start building in public and your posts will appear here.</p>
          <button
          onClick={()=>
          {
            getData()
          }
          }>get data</button>
          </div>
        )
        : 
        (
          <div className=' h-500 w-full flex flex-col gap-6'>
            {posts.map((p) => {
              return <FeedContent key={p.id} caption={p.postcaption} image={p.postimage} video={p.postvideo} />
            })}
          </div>
        )
      }
    
    </>
  )
}

export default Feed
