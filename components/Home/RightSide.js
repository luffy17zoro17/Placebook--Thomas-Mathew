import GroupConversations from "./GroupConversations";
import Groups from "./Groups";
import Sponsored from "./Sponsored";



const RightSide = () => {
    return (
      <div className="fixed right-5 top-[5rem] space-y-5 hidden w-[19rem] xl:block">
        <Groups/>
        <Sponsored/>
        <GroupConversations/>
      </div>  
    );
}

export default RightSide