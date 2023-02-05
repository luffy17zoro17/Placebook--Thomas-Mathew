import PostHeader from "./PostHeader";
import Posts from "./Posts";
import PostTop from "./PostTop";


/** w-[37vw] */



const Center = () => {
    return (
      <div className="flex w-full justify-center
        h-screen pt-[5rem]
        ">
        <div className="w-[95%] sm:w-[80%] md:w-[80vw]
          md:pl-[38vw] md:w-[97%] md:pr-[3vw]
          lg:pl-[32vw] lg:w-[90%] xl:pl-0 xl:w-[42vw]">    
            <PostTop/>
            <PostHeader/>
            <Posts/>
        </div>
      </div>  
    );
}

export default Center;