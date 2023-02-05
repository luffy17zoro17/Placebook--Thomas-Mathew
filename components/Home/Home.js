import SidebarHome from "../SidebarHome";
import Center from "./Center";

import RightSide from "./RightSide";



const Home = () => {
    return (
      <div className="
      bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500
       fixed w-full overflow-y-scroll">
        <div>
          <SidebarHome/><RightSide/>
        </div>
        <div className="bg-transparent">
           <Center/>
        </div>
      </div>  
    );
}

export default Home;