import Link from "next/link";


const LinkProp = ({icon,title,lhref,lclassN,ldivclassN}) => {
    return (
      <div className={ldivclassN}>
        <Link href={lhref} className={lclassN}>
            {icon} {title}
        </Link>
      </div>  
    );
}

export default LinkProp;