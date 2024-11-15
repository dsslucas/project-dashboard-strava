import React from "react";

interface Props {
    children: React.ReactNode;
    flex?: boolean;
    flex1?: boolean;
    flexCol?: boolean;
    itemsCenter?: boolean;
    justifyCenter?: boolean;
    textCenter?: boolean;
    sectionInfos?: boolean;
    gap?: boolean;
}

const Section: React.FC<Props> = (props: Props) => {
    var className = "";

    if (props.flex) className += "flex ";
    if (props.flex1) className += "flex-1 ";
    if (props.flexCol) className += "flex-col ";
    if (props.itemsCenter) className += "items-center ";
    if (props.justifyCenter) className += "justify-center ";
    if (props.textCenter) className += "text-center ";
    if (props.sectionInfos) className += "border border-solid border-gray-400 rounded px-2 py-1 shadow-md";
    if (props.gap) className += "gap-2 ";

    return (
        <>
            <section className={className.trim()}>
                {props.children}
            </section>
        </>
    );
}

export default Section;