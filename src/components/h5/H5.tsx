import React from "react";

interface Props {
    children?: React.ReactNode
    textCenter?: boolean;
    textOrange?: boolean;
    text2xl?: boolean;
    uppercase?: boolean;
    fontBold?: boolean
}

const H5: React.FC<Props> = (props: Props) => {
    var className = "font-sans ";

    if(props.textCenter) className += "text-center ";
    if(props.textOrange) className += "text-[#FC4C02] ";
    if(props.text2xl) className += "text-2xl ";
    if(props.uppercase) className += "uppercase ";
    if(props.fontBold) className += "font-bold "

    return <h5 className={className.trim()}>{props.children}</h5>
}

export default H5;