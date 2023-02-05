
import IconProp from "../props/IconProp";
import TextProp from "../props/TextProp";
import GroupsIcon from '@mui/icons-material/Groups';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import ImageProp from "../props/ImageProp";


const Groups = () => {
    return (
       <div className="space-y-3
       bg-gradient-to-t from-pink-300 via-yellow-200 to-red-200
        text-[0.95rem] py-3 px-4 rounded-l-[2rem] shadow-black shadow">
         <div className="flex justify-between">
           <div className="flex items-center">
             <IconProp 
               icon={<GroupsIcon/>}
               icoclassN={`pr-2`}
             />
             <TextProp 
              title={`Groups`}
              details={`· Suggested for you`}
              detailclassN={`text-gray-500`}
              tdivclassN={`flex gap-1`}
             />
           </div>
           <IconProp icoclassN={`shadow shadow-black bg-cyan-200
             cursor-pointer hover:bg-cyan-300`} icon={<DisabledByDefaultIcon/>}/>
         </div>  

         <ImageProp 
            isrc={`https://w0.peakpx.com/wallpaper/712/885/HD-wallpaper-kaido-wano-anime-luffy-one-piece-manga.jpg`}
            iht={`600`}
            iwd={`600`}
            imgclassN={`h-[11rem] w-[20rem]
               rounded-xl object-cover cursor-pointer shadow shadow-pink-900`}
            ialt={`One piece wano arc`}
         />
         <TextProp 
            title={`One Piece(Wano arc)`}
            titleclassN={`font-bold`}
            details={`439K following 10 posts a day`}
            detailclassN={`text-gray-800 font-light tracking-tight
              text-[0.8rem]`}
         />

         <TextProp 
            title={`Join Group`} 
            titleclassN={`font-bold bg-cyan-300 shadow shadow-black
             rounded-lg text-center cursor-pointer
               py-2 hover:bg-cyan-400`}
         />
       </div>
    );
}

export default Groups;