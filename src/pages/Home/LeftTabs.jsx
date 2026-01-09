import React from 'react'

const LeftTabs = () => {
    return (
        <div className="flex w-full flex-col gap-3 text-center text-white">
            <div className=' mx-auto h-fit w-full p-5 text-left bg-[#22272F] rounded-xl flex flex-col  items-center '>
                <h2 className="posts w-full  hover:bg-gray-700 py-2 px-2 rounded-xl">My Posts</h2>
                <h2 className="posts w-full  hover:bg-gray-700 py-2 px-2 rounded-xl">Saved</h2>
                <h2 className="posts w-full  hover:bg-gray-700 py-2 px-2 rounded-xl">Communities</h2>
                <h2 className="posts w-full  hover:bg-gray-700 py-2 px-2 rounded-xl">Live Jams</h2>
                <h2 className="posts w-full  hover:bg-gray-700 py-2 px-2 rounded-xl">Opportunities</h2>
            </div>

            <div className=' mx-auto h-fit w-full p-5  bg-[#22272F] rounded-xl flex flex-col text-left items-center '>
                <h2 className="posts w-full  hover:bg-gray-700 py-2 px-1 rounded-xl">Dark Mode</h2>
                <h2 className="posts w-full  hover:bg-gray-700 py-2 px-1 rounded-xl">Settings</h2>
                <h2 className="posts text-red-500 w-full  hover:bg-gray-700 py-2 px-1 rounded-xl">Logout</h2>
            </div>
        </div>
    )
}

export default LeftTabs
