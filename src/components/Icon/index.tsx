import React from "react";
import "./index.scss";
import classnames from "classnames";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);

export type ThemeProps = "primary" | "danger" | "info" | "success" | "warning";


export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps
}

const Icon: React.FC<IconProps> = props => {
    const { className, theme, ...restProps } = props;
    const classes = classnames("pa-icon", className, `icon-${theme}`);
    return (
        <FontAwesomeIcon className={classes} {...restProps} data-testid="test-icon"/>
    )
}
export default Icon;