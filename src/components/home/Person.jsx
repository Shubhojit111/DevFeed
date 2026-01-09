

const Person = ({profilepic, name, mutuals}) => {
  return (
    <div className='person flex justify-between py-2 '>
      <div className="flex gap-3">

        <div className="pic  h-10 w-10 rounded-full overflow-hidden">
          <img src={profilepic} alt="profile pic" />
        </div>

        <div className="info flex flex-col text-left justify-center ">
          <h1 className='font-semibold text-[15px]'>{name}</h1>
          <p className='text-[12px]  whitespace-nowrap overflow-clip text-gray-500 '>{mutuals} Mutual friends</p>
        </div>

      </div>
      
      <button className="text-blue-600 rounded-xl font-extrabold text-xs hover:underline-offset-2 hover:underline hover:scale-110">Follow</button>
    </div>
  )
}

export default Person
