import React from "react";

interface Props {
    textCenter?: boolean;
    children?: React.ReactNode
}

const Span: React.FC<Props> = (props: Props) => {
    var className = "";

    if(props.textCenter) className += "text-center "

    return <span className={className}>{props.children}</span>
}

export default Span;