import ImageProp from "../props/ImageProp";
import InputProp from "../props/InputProp";

import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import CollectionsIcon from '@mui/icons-material/Collections';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import IconProp from "../props/IconProp";
import TextProp from "../props/TextProp";
import ProfilePicSmall from "../ProfilePicSmall";

const BottomItems=[
  {
    id:1,
    title:`Live video`,
    icon:<VideoCameraFrontIcon/>, 
  },
  {
    id:2,
    title:`Photo/video`,
    icon:<CollectionsIcon/>
  },
  {
    id:3,
    title:`Feeling/activity`,
    icon:<EmojiEmotionsIcon/>,
  }
]




const PostHeader = () => {
    return (
     <div> 
      <div className="
       bg-gradient-to-t from-pink-300 to-yellow-200
      rounded-xl mt-5 shadow shadow-black
       rounded-br-[3rem]">
         <div className="flex items-center pl-5
           rounded-t-xl relative
          py-4 gap-[0.7vw]">
           <ProfilePicSmall/>
           <InputProp 
                 inplaceholder={`Whats on your mind, Thomas?`}
                 inclassN={`bg-gray-800 py-2 px-5 rounded-l-full
                     mt-[-1.3rem] text-pink-300 placeholder-pink-100
                    outline-none absolute right-[0rem]
                    hover:placeholder-white hover:text-white
                    hover:bg-cyan-400 left-[5rem]`}     
            />
         </div>

         <div className="flex justify-center gap-[3vw]
          py-5 sm:gap-[6vw] md:gap-[1.6vw] lg:gap-[6vw]
          xl:gap-[3.5vw]">
         {BottomItems.map((item)=>(
            <div key={item.id} className="flex items-center gap-1
               cursor-pointer hover:text-cyan-400 xl:gap-2">
               <IconProp icon={item.icon} 
                  icoclassN={`${item.id===1 ? `text-red-600` :
                   item.id===2 ? `text-green-500` : item.id===3 ? `text-yellow-600` : ``}`}/>
               <TextProp 
                  title={item.title}
                  titleclassN={`font-bold text-[0.9rem]`}
               />
            </div>  
         ))}
         </div>
      </div>  
     </div> 
    );
}

export default PostHeader;