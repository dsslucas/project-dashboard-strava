import React from "react";

interface Props {
    type: string;
    textCenter?: boolean;
    children?: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    width25Percent?: boolean;
    hoverGray300?: boolean;
}

const Button: React.FC<Props> = (props: Props) => {
    var className = "pointer ";

    if(props.textCenter) className += "text-center ";
    if(props.width25Percent) className += "w-1/4 ";
    if(props.hoverGray300) className += "hover:bg-gray-300 "

    return <button className={className.trim()} onClick={props.onClick}>{props.children}</button>
}

export default Button;