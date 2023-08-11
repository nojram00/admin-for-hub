import Image from 'next/image'

export default function Home() {
  return (
    <div className='outline outline-black min-h-screen bg-hub-admin-login'>
      <div className=" flex flex-row outline items-center justify-around px-40 outline-black min-h-screen">
          <div className="">
            <Image src="hub.svg"
                  alt="HUB-logo"
                  width={500}
                  height={500}/>
          </div>
          <div className="w-1/2">
              <form action="" className="flex flex-col justify-baseline items-center space-y-7 text-black">
                <div className="flex flex-row space-x-7 items-baseline justify-between">
                  {/* <label htmlFor="username">Username</label> */}
                  <Image src="/Icons/user.svg"
                        width={39}
                        height={39}
                        alt='user-icon'
                        className="absolute"/>
                  <input type="text" name="username" className="border p-2 border-black h-[57px] w-[532px] rounded-md" id="" placeholder='ID'/>
                </div>
                <div className="flex flex-row space-x-7 justify-center items-baseline">
                  {/* <label htmlFor="password" className="">Password</label> */}
                  <Image src="/Icons/lock.svg"
                        width={39}
                        height={39}
                        alt='lock-icon'/>
                  <input type="password" name="password" className=" border p-2 border-black rounded-md h-[57px] w-[532px]" id="" placeholder='Password' />
                </div>
                <div>
                  <button type="submit" className="bg-login-btn-admin p-5 rounded-lg hover:drop-shadow-lg w-[471px] h-[61px] hover:text-white">Login</button>
                </div>
              </form>
          </div>
      </div>
    </div>
  )
}
