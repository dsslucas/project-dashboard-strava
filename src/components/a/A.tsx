import React from "react";

interface Props {
    href?: string;
    text?: string;
    isNavbar?: boolean;
    textOrange?: boolean;
}

const A: React.FC<Props> = (props: Props) => {
    var className = "";

    if (!props.isNavbar) {
        className = "underline";
        if (props.textOrange) className += "text-[#FC4C02]";
    }

    return <a
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className={className}
    >
        {props.text}
    </a>
}

export default A;