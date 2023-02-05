import SidebarProp from "./biggerProps/SidebarProp";
import { SidebarHomeItems } from "./Home/SidebarHomeItems";



const SidebarHome = () => {
    return (
     <div className=""> 
      <div className="fixed h-[7rem] w-[5rem] bg-pink-300 left-0 top-5
         hidden md:flex"/>
      <div className="fixed bottom-0 top-[3.4rem] w-[22rem]
          text-black rounded-r-[4rem] border-dashed
          border-cyan-400 border-x-4 rounded-tl-[4rem]     
          pt-5 overflow-y-scroll shadow-lg shadow-black
          bg-gradient-to-l from-pink-100 via-yellow-100 to-yellow-200
            lg:overflow-y-hidden lg:hover:rounded-r-none lg:hover:overflow-y-scroll
            hidden md:block
            md:w-[17rem] lg:w-[20rem]">
        {SidebarHomeItems.map((item)=>(
               
            <div key={item.id}>
               
                <SidebarProp id={item.id}
                 icon={item.icon} 
                 icoclassN={item.icoclassN}
                 title={item.title}
                 sbDivclassN={`flex items-center gap-3 pl-4
                    pr-2 mb-4 py-1 hover:shadow hover:shadow-black
                    cursor-pointer hover:bg-pink-300
                    hover:text-cyan-600 hover:rounded-br-full
                    lg:pr-8
                    ${item.id===25 ? `hover:bg-transparent hover:shadow-none text-sm
                     hover:underline hover:text-gray-900` : item.id===26 ? 
                     `border-dashed border border-black font-bold text-[0.9rem]
                      text-purple-800 hover:text-red-700 hover:underline
                      hover:bg-white hover:border-none` 
                     : ``}`}/>
            </div>    
        ))}
      </div> 
     </div>  
    );
}

export default SidebarHome;