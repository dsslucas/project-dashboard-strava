import React from "react";

interface Props {
    type: string;
    textCenter?: boolean;
    children?: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = (props: Props) => {
    var className = "";

    if(props.textCenter) className += "text-center "

    return <button className={className.trim()} onClick={props.onClick}>{props.children}</button>
}

export default Button;