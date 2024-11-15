import React from "react";

interface Props {
    children: React.ReactNode;
    flex?: boolean;
    flex1?: boolean;
    flexCol?: boolean;
    itemsCenter?: boolean;
    justifyCenter?: boolean;
    textCenter?: boolean;
}

const Section: React.FC<Props> = (props: Props) => {
    var className = "";

    if (props.flex) className += "flex ";
    if (props.flex1) className += "flex-1 ";
    if (props.flexCol) className += "flex-col ";
    if (props.itemsCenter) className += "items-center ";
    if (props.justifyCenter) className += "justify-center ";
    if (props.textCenter) className += "text-center ";

    return (
        <>
            <section className={className.trim()}>
                {props.children}
            </section>
        </>
    );
}

export default Section;