import React from "react";

interface Props {
    children: React.ReactNode;
    flex?: boolean;
    flex1?: boolean;
    flexRowMobileScreen?: boolean;
    flexCol?: boolean;
    flexColMobileScreen?: boolean;
    flexWrap?: boolean;

    itemsCenter?: boolean;
    justifyCenter?: boolean;
    justifyCenterMobileScreen?: boolean;
    justifyBetween?: boolean;

    textCenter?: boolean;
    sectionInfos?: boolean;

    gap?: boolean;
    gap2?: boolean;
    gap3?: boolean;
    gapX2?: boolean;
    gapX3?: boolean;

    width25PercentMobileScreen?: boolean;
    width75PercentMobileScreen?: boolean;
    width25PercentMediumScreen?: boolean;
    widthFull?: boolean;

    marginAuto?: boolean;
    marginTop4?: boolean;

    dropdown?: boolean;
    transitionAll?: boolean;
    duration300?: boolean;
    dropdownOpen?: boolean;
    overflowHidden?: boolean;

    key?: string | number;
}

const Divider: React.FC<Props> = (props: Props) => {
    var className = "";

    if (props.flex) className += "flex ";
    if (props.flexCol) className += "flex-col ";
    if (props.flexColMobileScreen) className += "xs:flex-col ";
    if (props.flexRowMobileScreen) className += "xs:flex-row ";
    if (props.flexWrap) className += "flex-wrap "
    if (props.justifyBetween) className += "justify-between ";
    if (props.width25PercentMobileScreen) className += "xs:w-1/4 ";
    if (props.width75PercentMobileScreen) className += "xs:w-3/4 ";
    if (props.width25PercentMediumScreen) className += "md:w-1/4 ";
    if (props.widthFull) className += "w-full ";
    if (props.justifyCenter) className += "justify-center ";
    if (props.justifyCenterMobileScreen) className += "xs:justify-center ";
    if (props.itemsCenter) className += "items-center ";
    if (props.gap2) className += "gap-2 ";
    if (props.gap3) className += "gap-3 ";
    if (props.gapX2) className += "gap-x-2 ";
    if (props.gapX3) className += "gap-x-3 ";
    if (props.marginAuto) className += "margin-auto ";
    if (props.marginTop4) className += "mt-4 ";
    if (props.dropdown) {
        if (props.transitionAll) className += "transition-all ";
        if (props.duration300) className += "duration-300 ";

        if (props.dropdownOpen) className += "max-h-screen opacity-100 ";
        else className += "max-h-0 opacity-0 ";

        if (props.overflowHidden) className += "overflow-hidden";
    }

    return <div className={className.trim()} key={props.key || 0}>{props.children}</div>
}

export default Divider;