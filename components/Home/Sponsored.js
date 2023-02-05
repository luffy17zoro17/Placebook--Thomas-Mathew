import ImageProp from "../props/ImageProp";
import TextProp from "../props/TextProp";



const SponsoredList = [
    {
        id:1,
        title:`Home Essentials India`,
        url:`homessentials.in`,
        isrc:`https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_960_720.jpg`,
        ialt:`bed`,
    },
    {
        id:2,
        title:`East Em India`,
        url:`eastem.in`,
        isrc:`https://cdn.pixabay.com/photo/2013/09/26/11/59/leather-sofa-186636_960_720.jpg`,
        ialt:`sofa`,

    }
]




const Sponsored = () => {
    return (
      <div>
        <div className="border-y border-gray-400 rounded-l-[2rem]
           shadow shadow-black
          bg-gradient-to-t from-pink-300 via-yellow-200 to-red-200 px-4">
           <TextProp title={`Sponsored`} titleclassN={`font-bold py-4`}/> 
           <div>
            <div className="">
              {SponsoredList.map((item)=>(  
               <div key={item.id} className="flex items-center
                  cursor-pointer mb-5
                   hover:shadow hover:shadow-black
                   hover:rounded-lg">  
                   
                <ImageProp
                   isrc={item.isrc}
                   iht={`700`}
                   iwd={`700`}
                   imgclassN={`h-[5rem] w-[9rem] object-cover rounded-lg`}
                   ialt={item.ialt}
                   
                />
                <TextProp
                   title={item.title}
                   titleclassN={`text-[0.97rem]`}
                   details={item.url}
                   detailclassN={`text-sm text-gray-600`}
                   tdivclassN={`pl-5`}
                />
               </div> 
              ))}  
            </div>
           </div>
        </div>
      </div>  
    );
}

export default Sponsored;