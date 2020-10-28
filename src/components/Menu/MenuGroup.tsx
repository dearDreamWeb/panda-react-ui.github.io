import React from "react";
import classnames from "classnames";
import { AllMenuItemProps } from "./MenuItem";

interface MenuGroupProps {
    index?: string;
    title: string;
    className?: string;
}

export type allMenuGroupProps = MenuGroupProps & React.HTMLAttributes<HTMLElement>;

const MenuGroup: React.FC<allMenuGroupProps> = props => {
    const { index, title, className, children, ...restProps } = props;
    const classes = classnames("pa-menu-group");

    const renderChildren = () => {
        return React.Children.map(children, (child, i) => {
            const childEl = child as React.FunctionComponentElement<AllMenuItemProps>;
            if (childEl.type.displayName === "MenuItem") {
                return React.cloneElement(childEl, { index: `${index}-${i + 1}`, className: "pa-menu-group-item" });
            } else {
                console.error("Warning: MenuGroup has a child which is not a MenuItem component");
            }
        })
    }

    return (
        <li key={index} className={classes} {...restProps}>
            <p className="pa-menu-group-title">{title}</p>
            <ul>
                {renderChildren()}
            </ul>
        </li>
    )
}
MenuGroup.displayName = "MenuGroup";
export default MenuGroup;