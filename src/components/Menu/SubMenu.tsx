import React, { useState, useContext } from "react";
import classnames from "classnames";
import { MenuContext } from "./index";
import { AllMenuItemProps } from "./MenuItem";
import Icon from "../Icon";
import Transition from "../../components/Transition";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);

interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
}

export type allSubMenuProps = SubMenuProps & React.HTMLAttributes<HTMLElement>;

const SubMenu: React.FC<allSubMenuProps> = props => {
    const { index, title, className, children, ...restProps } = props;
    const context = useContext(MenuContext);
    const defaultOpenKeys = context.defaultOpenKeys as Array<string>; // 获取默认打开的菜单的数组
    // 只有在mode为vertical时才使用默认打开功能，判断初始化时是否打开
    const isOpen = (index && context.mode === "vertical") ? defaultOpenKeys.includes(index) : false;
    const [openSubMenu, setOpenSubMenu] = useState(isOpen);   // SubMenu是否打开
    // submenItem的class
    const classes = classnames("submenu-item", className, {
        "is-active": context.index.split("-")[0] === index,
        "is-opened": openSubMenu  // 是否展开
    })
    // subMenu的class
    const subMenuClasses = classnames("pa-submenu");

    // 渲染SubMenu的子组件
    const renderChildren = () => {
        const childrenComponent = React.Children.map(children, (child, i) => {
            const childEl = child as React.FunctionComponentElement<AllMenuItemProps>;
            const displayName = childEl.type.displayName;
            if (displayName === "MenuItem" || displayName === "MenuGroup") {
                return React.cloneElement(childEl, { index: `${index}-${i + 1}` });
            } else {
                console.error("Warning: SubMenu has a child which is not a MenuItem component");
            }
        })
        return (
            <Transition
                in={openSubMenu}
                timeout={300}
                animation="slide-in-top"
            >
                <ul className={subMenuClasses} {...restProps}>
                    {childrenComponent}
                </ul>
            </Transition>

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
                <Icon icon="angle-down" className="arrow-down" />
            </div>

            {renderChildren()}
        </li>
    )
}
SubMenu.displayName = "SubMenu";
export default SubMenu;