import React from "react";

interface Props {
    textCenter?: boolean;
    children: React.ReactNode;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Corrigido tipo
    value: string;
    border?: boolean;
    borderGray400?: boolean;
    rounded?: boolean;
}

const Select: React.FC<Props> = (props: Props) => {
    var className = "";

    if (props.textCenter) className += "text-center "
    if (props.border) className += "border border-solid ";
    if (props.borderGray400) className += "border-gray-400 ";
    if (props.rounded) className += "rounded ";

    return <select
        onChange={props.onChange}
        className={className.trim()}
        value={props.value}>
        {props.children}
    </select>
}
export default Select;