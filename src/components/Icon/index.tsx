import React from "react";
import "./index.scss";
import classnames from "classnames";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type ThemeProps = "primary" | "danger" | "info" | "success" | "warning";


export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps,
    // style?: React.CSSProperties
}

const Icon: React.FC<IconProps> = props => {
    const { className, theme, ...restProps } = props;
    const classes = classnames("pa-icon", className, `icon-${theme}`);
    return (
        <FontAwesomeIcon className={classes} {...restProps} />
    )
}
export default Icon;