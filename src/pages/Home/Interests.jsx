import React from 'react'
import Person from '../../components/home/Person'
import { UserPlus2 } from 'lucide-react'

const Interests = () => {
  return (
    <div className="interests h-fit w-full px-4 py-4 border border-[#1F2933] rounded-xl text-white bg-[#13191F]">

      <div className="text-[18px] font-bold  flex gap-2.5">
        <div className="text-sky-500">
            <UserPlus2 />
        </div>
        <h1 className=''>Who to follow</h1>
      </div>

      <div className="people my-2">
          <Person 
            profilepic="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500"
            name="Ritika Sharma"
            mutuals={98}
          />

          <Person
            profilepic="https://images.unsplash.com/photo-1548142813-c348350df52b?w=500"
            name="Krishna Mehta"
            mutuals={211}
          />

          <Person
            profilepic="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500"
            name="Sneha Paul"
            mutuals={167}
          />

          <Person
            profilepic="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500"
            name="Rohit Das"
            mutuals={84}
          />

        





        </div>

      <div className="h4 text-md font-semibold text-sky-500">See More</div>

    </div>



  )
}

export default Interests
