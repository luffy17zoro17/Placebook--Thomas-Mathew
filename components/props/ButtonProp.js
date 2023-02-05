


const ButtonProp = ({icon,title,bfunc,bclassN,bdivclassN}) => {
    return (
      <div className={bdivclassN}>
        <button onClick={bfunc} className={bclassN}>
            {icon} {title}
        </button>
      </div>  
    );
}

export default ButtonProp