import Logo from "./Logo";
import InputProp from "./props/InputProp";
import SearchIcon from '@mui/icons-material/Search';
import IconProp from "./props/IconProp";



import { NavCenterIcons, NavRightIcons } from "./NavItems";
import ProfilePicSmall from "./ProfilePicSmall";





const Navbar = () => {
    return (
      <div className="flex items-center fixed w-full shadow-md
        shadow-black bg-gradient-to-r from-pink-300 via-yellow-300 
        to-pink-200 border-b h-[3.5rem] top-0 z-20 rounded-br-[3rem]">
        <div className="flex gap-[2vw] absolute left-5">
           <Logo/>

           <div className="relative flex items-center
                pl-[13vw] lg:pl-[2vw]">
             <IconProp
                icoclassN={`absolute z-30 ml-2 px-[0.2rem]
                py-[0.1rem]
                shadow rounded-full shadow-black
                   `}
                icon={<SearchIcon/>}
             />
             <InputProp
               inplaceholder={`Search Placebook`}
               inclassN={` p-2 bg-transparent rounded-full outline-none
                  relative pl-11 border border-dashed border-black
                  placeholder-cyan-500 w-[40vw] lg:w-[20vw] xl:w-[18rem]`}
             />
           </div>
        </div>

        <div className="flex gap-[0.5vw] absolute right-5">
          {NavRightIcons.map((ico)=>(
            <div key={ico.id} className="flex">
               <IconProp icon={ico.icon} icoclassN={`p-2
                rounded-full shadow shadow-black bg-blue-400 text-pink-100
                 cursor-pointer hover:text-black border-4
                 hover:border-black ${ico.id<3 ? `hidden md:flex` : ``}`}/>
            </div>  
          ))}
          <ProfilePicSmall/>
        </div>

        <div className="flex justify-center w-full gap-[2vw] hidden lg:flex">
           {NavCenterIcons.map((ico)=>(
              <div key={ico.id}>
                 <IconProp icon={ico.icon} icoclassN={`scale-[1.3] 
                   hover:text-cyan-400 text-center
                   cursor-pointer border-4
                    w-[5vw]
                    ${ico.id===1 ? `border-b-[0.2rem] border-x-0 border-t-0 
                    border-cyan-400 pb-1 pt-[0.3rem] text-cyan-400` :
                     `border-transparent`}`}/>
              </div>
           ))}
        </div>
      </div>  
    );
}

export default Navbar;