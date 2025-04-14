import Navbar from "../components/ui/Navbar"

export const Header = () => {
  return (
    <div className='w-full max-w-[1170px] h-auto min-h-[38px]  mx-auto mt-10'>
      <div className=" flex justify-between items-center">
        <h1 className="text-[24px] font-bold">Exclusive</h1>
        <div>
          <Navbar />
        </div>
        <div>
         <input className="bg-black text-white" type="text" placeholder="What is you looking for?" />
        </div>
      </div>
    </div>
  )
}
