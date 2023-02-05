


const InputProp = ({inplaceholder,inclassN,indivclassN}) => {
    return (
      <div className={indivclassN}>
        <input placeholder={inplaceholder} className={inclassN}/>
      </div>  
    );
}

export default InputProp;