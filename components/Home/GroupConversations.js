import IconProp from "../props/IconProp";
import TextProp from "../props/TextProp";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const GroupConversations = () => {
    return (
      <div className="space-y-4 p-4 rounded-l-[2rem]
       shadow shadow-black
       bg-gradient-to-t from-pink-300 to-yellow-200">
         <TextProp 
            title={`Group conversations`} 
            titleclassN={`font-bold text-gray-600`}
         />
         <div className="flex items-center gap-2 text-[0.99rem]
         cursor-pointer hover:text-cyan-500">
           <IconProp icon={<AddCircleOutlineIcon/>}/><TextProp title={`Create New Group`}/>
         </div>  
      </div>  
    );
}

export default GroupConversations;