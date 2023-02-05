import ProfilePicSmall from "../ProfilePicSmall";
import IconProp from "../props/IconProp";
import TextProp from "../props/TextProp";

import Link from "next/link";


const SidebarProp = ({icon,title,sbDivclassN,id,icoclassN}) => {
    return (
      <div className={sbDivclassN}>
         {id===0 && (<div className="scale-[0.8]"><ProfilePicSmall/></div>)} 
         <IconProp icoclassN={id===0 ? `hidden` : `scale-[1.2] px-2 ${icoclassN}`} icon={icon}/>
         <TextProp title={title} titleclassN={`text-[0.99rem]`}/>
         {id===25 ? <TextProp 
         details={`Privacy  · Terms  · Advertising  · Ad choices   · Cookies  · More  · Placebook © 2023`}/> : 
         id===26 ? <Link href={`https://www.linkedin.com/in/thomas-mathew-b26b87253/`}>
          <TextProp title={`Created By Thomas Mathew`}/></Link> : ``}
      </div>  
    );
}

export default SidebarProp;