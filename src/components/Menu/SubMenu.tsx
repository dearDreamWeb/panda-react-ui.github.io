import React, { useState, useContext, FunctionComponentElement } from "react";
import classnames from "classnames";
import { MenuContext } from "./index";
import { MenuItemProps } from "./MenuItem";

export interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
}

const SubMenu: React.FC<SubMenuProps> = props => {
    const { index, title, className, children } = props;
    const context = useContext(MenuContext);
    const defaultOpenKeys = context.defaultOpenKeys as Array<string>; // 获取默认打开的菜单的数组
    // 只有在mode为vertical时才使用默认打开功能，判断初始化时是否打开
    const isOpen = (index && context.mode === "vertical") ? defaultOpenKeys.includes(index) : false; 
    const [openSubMenu, setOpenSubMenu] = useState(isOpen);  // SubMenu是否打开
    // submenItem的class
    const classes = classnames("submenu-item", className, {
        "is-active": context.index.split("-")[0] === index
    })
    // subMenu的class
    const subMenuClasses = classnames("pa-submenu", {
        "open-submenu": openSubMenu
    })
    // 渲染SubMenu的子组件
    const renderChildren = () => {
        const childrenComponent = React.Children.map(children, (child, i) => {
            const childEl = child as React.FunctionComponentElement<MenuItemProps>;
            if (childEl.type.displayName === "MenuItem") {
                return React.cloneElement(childEl, { index: `${index}-${i + 1}` });
            } else {
                console.error("Warning: SubMenu has a child which is not a MenuItem component");
            }
        })
        return (
            <ul className={subMenuClasses}>
                {childrenComponent}
            </ul>
        )
    }

    // 点击显示SubMenu
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setOpenSubMenu(!openSubMenu);
    }

    // 鼠标移入显示SubMenu移出隐藏SubMenu
    let timer: any;
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(() => {
            setOpenSubMenu(toggle);
        }, 300)
    }

    // 当mode为horizontal时使用鼠标移入移出事件；为vertical时使用click事件
    const hoverEvents = context.mode !== "vertical" ? {
        onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
        onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) }
    } : {};
    const clickEvents = context.mode === "vertical" ? {
        onClick: (e: React.MouseEvent) => { handleClick(e) }
    } : {}

    // 渲染SubMenu
    return (
        <li key={index} className={classes} {...hoverEvents}>
            <div className="submenu-title" {...clickEvents}>
                {title}
            </div>
            {renderChildren()}
        </li>
    )
}
SubMenu.displayName = "SubMenu";
export default SubMenu;