import IconProp from "../props/IconProp";
import ImageProp from "../props/ImageProp";
import TextProp from "../props/TextProp";


import PublicIcon from '@mui/icons-material/Public';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';


const BottomItems=[
  {
    id:'a',
    title:`Like`,
    icon:<ThumbUpAltIcon/>,
  },
  {
    id:'b',
    title:`Comment`,
    icon:<ChatBubbleOutlineIcon/>,
  },
  {
    id:'c',
    title:`Share`,
    icon:<ShareIcon/>,
  }
]




const PostProp = ({posts}) => {
    return (
      <div>
       <div className="bg-gradient-to-t from-pink-300 via-yellow-200 to-red-200
       shadow shadow-black rounded-xl rounded-tr-[3rem] mt-[1.5rem]"> 
      
          <div>
             <TextProp title={posts.title} titleclassN={`border-b-2 border-cyan-400 p-3`}/>
             
             <div className="flex justify-between py-3 px-4">
               <div className="flex gap-3">
               <ImageProp 
                   isrc={posts.profilePic}
                   iht={`100`}
                   iwd={`100`}
                   ialt={`luffy profile pic`}
                   imgclassN={`h-[2.5rem] w-[2.5rem] object-cover
                     rounded-full cursor-pointer shadow border-4 border-cyan-400 
                     shadow-black hover:border-black`}
                />
               <div className="flex">
                <div className="flex items-end">
                 <TextProp 
                   title={posts.titleOne}
                   titleclassN={`font-bold cursor-pointer hover:underline`}
                    details={posts.detailsOne}
                    detailclassN={`text-cyan-600 text-sm cursor-pointer hover:underline`}
                 />
                 <IconProp icoclassN={`scale-[0.6] cursor-pointer`} icon={<PublicIcon/>}/>
                </div>
               </div>
                </div>
                <div className="flex gap-3">
                  <IconProp icoclassN={`cursor-pointer hover:text-cyan-400`} icon={<MoreHorizIcon/>}/>
                  <IconProp icoclassN={`cursor-pointer hover:text-cyan-400`} icon={<HighlightOffIcon/>}/>
                </div>
             </div>
             <TextProp details={posts.details} detailclassN={`py-3 px-4 text-sm`}/>
             <ImageProp 
                isrc={posts.bodyImage}
                iht={`500`}
                iwd={`900`}
                imgclassN={`object-cover rounded-bl-[6rem] border-b-[0.5rem] 
                            bg-black
                            border-transparent shadow shadow-black cursor-pointer`}
                ialt={`strawhats body image`}
             />
             <div className="text-sm">
                <div className="border-b-2 border-cyan-400
                 flex justify-between p-3">
                    <div className="flex items-center">
                    <IconProp icoclassN={`scale-[0.7]`} icon={posts.reactions.map((reactn)=>(
                      <span key={reactn.id} className={`pl-1 
                      ${reactn.id===0 ? `text-blue-500 cursor-pointer
                        hover:text-blue-700` : reactn.id===1 ? 
                        `text-red-500 cursor-pointer hover:text-red-700` : ``}`}>
                        {reactn.icon}</span>
                      ))}
                    />
                    <TextProp title={posts.count}/> 
                    </div>
                    <TextProp titleclassN={`hover:underline cursor-pointer`} 
                    title={posts.commentsShares}/>
                </div>

                <div className="flex justify-evenly p-5">
                  {BottomItems.map((item)=>(
                    <div key={item.id} className={`flex gap-2 font-semibold
                     hover:shadow-inner hover:shadow-pink-800 px-[5vw] py-3 cursor-pointer
                     hover:bg-cyan-400 hover:text-pink-200 md:px-[3vw] xl:px-[2vw]
                      ${item.id==='a' ? `rounded-tl-[1.5rem] rounded-br-[0.5rem]` :
                       item.id==='b' ? `rounded-t-[1.5rem] rounded-b-[0.5rem]` : item.id==='c' ? 
                       `rounded-tr-[1.5rem] rounded-bl-[0.5rem]` : ``}`}>
                     <IconProp icon={item.icon}/>
                     <TextProp title={item.title}/>
                    </div>
                  ))} 
                </div>
             </div> 
          </div>     
       </div>      
      </div>  
    );
}

export default PostProp;