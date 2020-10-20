import React, { useContext } from "react";
import classnames from "classnames";
import { MenuContext } from "./index";

// MenuItem的参数
export interface MenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
type AllMenuItemProps = MenuItemProps & React.HTMLAttributes<HTMLElement>;
const MenuItem: React.FC<AllMenuItemProps> = props => {
    const { index, disabled, className, style, children, ...restProps } = props;
    const context = useContext(MenuContext);
    const classes = classnames("menu-item", className, {
        "is-disabled": disabled,
        "is-active": context.index === index
    })
    // 点击事件通过context调用父组件的方法
    const handleClick = () => {
        if (context.onSelect && !disabled && (typeof index === "string")) {
            context.onSelect(index);
        }
    }
    return (
        <li className={classes} style={style} onClick={handleClick}  {...restProps}>
            {children}
        </li>
    )
}

MenuItem.defaultProps = {
    disabled: false
}

export default MenuItem;