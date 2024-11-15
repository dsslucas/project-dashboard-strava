import React from "react";

interface Props {
    alt: string;
    image: string;
    height12?: boolean;
    
}

const Img: React.FC<Props> = (props: Props) => {
    var className = "";

    if (props.height12) className += "h-12 ";
    return <img src={props.image} alt={props.alt} className={className.trim()}/>
}

export default Img;