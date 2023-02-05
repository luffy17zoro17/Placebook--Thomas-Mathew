import HomePostProp from "../biggerProps/HomePostProp";
import { HomePostItems } from "../HomePostItems";





const Posts = () => {
    return (
       <div>
         {HomePostItems.map((posts)=>(
          <div key={posts.id}>  
            <HomePostProp
               posts={posts}
            />
          </div> 
         ))} 
       </div> 
    );
}

export default Posts