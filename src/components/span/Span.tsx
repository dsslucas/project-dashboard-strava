import React from "react";

interface Props {
    textCenter?: boolean;
    children?: React.ReactNode;
    fontBold?: boolean;
    location?: boolean; // City/state/country
    textGray500?: boolean;
    indicator?: boolean;
}

const Span: React.FC<Props> = (props: Props) => {
    var className = "";

    if(props.textCenter) className += "text-center ";
    if(props.fontBold) className += "font-bold ";
    if(props.location) className += "text-sm ";
    if(props.location || props.textGray500) className += "text-gray-500 ";
    if(props.indicator) className += "rounded-lg w-auto bg-gray-500 px-2 text-white uppercase"

    return <span className={className.trim()}>{props.children}</span>
}

export default Span;