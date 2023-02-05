import ImageProp from "./props/ImageProp";



const ProfilePicSmall = () => {
    return (
      <div>
        <ImageProp 
            isrc={`https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg`} 
            iht={`200`} 
            iwd={`200`} 
            imgclassN={`rounded-full h-[2.5rem] w-[2.5rem] object-cover
               shadow shadow-black cursor-pointer border-4 border-cyan-400 hover:border-black`}
            alt={`kid luffy in field`}
          />
      </div>  
    );
}

export default ProfilePicSmall;