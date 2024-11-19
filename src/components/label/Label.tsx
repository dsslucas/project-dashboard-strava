import React from "react";

interface Props {
    textCenter?: boolean;
    children?: React.ReactNode;
    fontBold?: boolean;
    location?: boolean; // City/state/country
    textGray500?: boolean;
}

const Label:React.FC<Props> = (props: Props) => {
    return <label>
        {props.children}
    </label>
}

export default Label;