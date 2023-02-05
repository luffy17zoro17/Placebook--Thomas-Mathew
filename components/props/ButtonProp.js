


const ButtonProp = ({icon,title,bfunc,bclassN,bdivclassN}) => {
    return (
      <div className={bdivclassN}>
        <Button onClick={bfunc} className={bclassN}>
            {icon} {title}
        </Button>
      </div>  
    );
}

export default ButtonProp