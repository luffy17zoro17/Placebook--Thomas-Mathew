
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MovieIcon from '@mui/icons-material/Movie';
import VideoCallIcon from '@mui/icons-material/VideoCall';

import Diversity1Icon from '@mui/icons-material/Diversity1';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import MailLockIcon from '@mui/icons-material/MailLock';
import IconProp from '../props/IconProp';
import TextProp from '../props/TextProp';
import ImageProp from '../props/ImageProp';

import AddCircleIcon from '@mui/icons-material/AddCircle';



const TopItems=[
  {
     id:1,
     title:`Stories`,
     icon:<AutoStoriesIcon/>,
  },
  {
    id:2,
    title:`Reels`,
    icon:<MovieIcon/>,
  },
  {
    id:3,
    title:`Rooms`,
    icon:<VideoCallIcon/>,
  }
]


const RightItems = [
  {
    id:1,
    title:`Share everyday moments with friends and family.`,
    icon:<Diversity1Icon/>,
  },
  {
    id:2,
    title:`Stories disappear after 24 hours.`,
    icon:<AccessTimeFilledIcon/>,
  },
  {
    id:3,
    title:`Replies and reactions are private.`,
    icon:<MailLockIcon/>,
  }
]




const PostTop = () => {
    return (
      <div className='
      bg-gradient-to-t from-pink-300 via-yellow-200 to-red-200
          rounded-xl pb-3 px-5 shadow shadow-black rounded-tr-[4rem]'>
         <div className='flex border-b py-3 flex justify-center
             gap-[7vw] md:gap-[1vw]'>
            {TopItems.map((item)=>(
              <div key={item.id} className={`flex items-center gap-2 justify-center
               cursor-pointer hover:text-cyan-400 border-4 w-[19vw] text-[0.95rem]
               font-bold
               ${item.id===1 ? `border-b-[0.3rem] pb-3 pt-[0.8rem] text-cyan-500
                hover:text-cyan-500
                border-cyan-400 border-x-0 border-t-0` : `border-transparent`}`}>
              
                 <IconProp icon={item.icon}/>
                 <TextProp title={item.title}/>
               
              </div>  
            ))}
         </div>

         <div className='flex items-center pt-4 pb-1'>
            <div className='relative flex items-center justify-center
               cursor-pointer'>
              <div className='absolute h-[9rem] top-0 w-full bg-black flex
                 z-20 opacity-10 rounded-t-xl
                 hover:opacity-30 hover:h-full hover:rounded-xl'/>  
              <ImageProp
                isrc={`https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg`}
                iht={`600`}
                iwd={`600`}
                imgclassN={`w-[7rem] h-[12rem] 
                 object-cover border-b-[3rem] shadow
                  shadow-black
                border-white rounded-xl relative`}
                ialt={`kid luffy in field`}
              />
              <div className='absolute flex flex-col w-full
               justify-center items-center mt-[7.2rem]'>
                 <IconProp icoclassN={`border-white bg-white border-x
                  rounded-full scale-[1.3] text-blue-600 p-[0.04rem]`} 
                 icon={<AddCircleIcon/>}/>
                 <TextProp title={`Create story`} 
                   titleclassN={`text-xs font-bold pt-1`}/>
              </div>
            </div>  

            <div className='space-y-4 text-sm'>
               {RightItems.map((item)=>(
                  <div key={item.id} className="flex items-center">
                     <IconProp icon={item.icon} icoclassN={`ml-5 mr-3`}/>
                     <TextProp title={item.title}/>
                  </div>
               ))}
            </div>
         </div>
      </div>  
    );
}

export default PostTop;