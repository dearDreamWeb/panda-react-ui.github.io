import React from "react";
import "./index.scss";
import Common, { Example, ApiProps } from "../Common";
import Menu from "../../components/Menu";

const ViewMenu: React.FC<HTMLElement> = () => {
    // Menu组件的api
    const propsMenuData: string[][] = [
        ["className", "自定义的class类名", "string", "-"],
        ["mode", "分割线的模式，横向还是竖向", "horizontal | vertical", "horizontal"],
        ["defaultIndex", "初始化选中的菜单项", "string", "'0'"],
        ["defaultOpenKeys", "初始展开的 SubMenu 菜单项 key 数组", "array", "[]"],
        ["style", "根节点样式", "CSSProperties", "-"],
        ["children", "子节点", "ReactNode", "-"],
        ["onSelect", "被选中时调用", "function(key){}", "-"],
    ]

    // Menu.Item组件的api
    const propsMenuItemData: string[][] = [
        ["className", "自定义的class类名", "string", "-"],
        ["index", "item的唯一标识", "string", "-"],
        ["disabled", "是否禁用", "boolean", "false"],
        ["style", "根节点样式", "CSSProperties", "-"],
        ["children", "子节点", "ReactNode", "-"],
    ]

    // Menu.SubMenu组件的api
    const propsMenuSubMenuData: string[][] = [
        ["className", "自定义的class类名", "string", "-"],
        ["index", "item的唯一标识", "string", "-"],
        ["title", "子菜单项值", "string", "-"]
    ]

    // Menu.Group组件的api
    const propsMenuGroupData: string[][] = [
        ["className", "自定义的class类名", "string", "-"],
        ["index", "item的唯一标识", "string", "-"],
        ["title", "子菜单项值", "string", "-"]
    ]

    const str = ` ~~~js
    import { Menu } from "panda-ui";
    <Menu>
        <Menu.Item>选项一</Menu.Item>
        <Menu.Item>选项二</Menu.Item>
        <Menu.Item disabled>选项三</Menu.Item>
        <Menu.SubMenu title="分组">
            <Menu.Item>分组一</Menu.Item>
            <Menu.Item>分组二</Menu.Item>
            <Menu.Group title="分类">
                <Menu.Item>分类一</Menu.Item>
                <Menu.Item>分类二</Menu.Item>
            </Menu.Group>
        </Menu.SubMenu>
    </Menu>`;

    const str1 = ` ~~~js
    import { Menu } from "panda-ui";
    <Menu mode="vertical" style={{ width: "200px", backgroundColor: "#f7f7f7" }}>
        <Menu.Item>选项一</Menu.Item>
        <Menu.Item>选项二</Menu.Item>
        <Menu.Item disabled>选项三</Menu.Item>
        <Menu.SubMenu title="分组">
            <Menu.Item>分组一</Menu.Item>
            <Menu.Item>分组二</Menu.Item>
        </Menu.SubMenu>
        <Menu.Group title="分类">
            <Menu.Item>分类一</Menu.Item>
            <Menu.Item>分类二</Menu.Item>
        </Menu.Group>
    </Menu>`;





    return (
        <div className="view-divider">
            <Common title="Menu 导航菜单" >
                为页面和功能提供导航的菜单列表。
            </Common>
            <Common title="何时使用" >
                网站顶部和左侧的导航。
            </Common>
            <Common title="代码示例">
                <Example title="水平导航" codeDescription="水平的顶部导航菜单。" codeContent={str} >
                    <Menu>
                        <Menu.Item>选项一</Menu.Item>
                        <Menu.Item>选项二</Menu.Item>
                        <Menu.Item disabled>选项三</Menu.Item>
                        <Menu.SubMenu title="分组">
                            <Menu.Item>分组一</Menu.Item>
                            <Menu.Item>分组二</Menu.Item>
                            <Menu.Group title="分类">
                                <Menu.Item>分类一</Menu.Item>
                                <Menu.Item>分类二</Menu.Item>
                            </Menu.Group>
                        </Menu.SubMenu>
                    </Menu>
                </Example>

                <Example title="垂直导航" codeDescription="垂直的顶部导航菜单。" codeContent={str1} >
                    <Menu mode="vertical" style={{ width: "200px", backgroundColor: "#f7f7f7" }}>
                        <Menu.Item>选项一</Menu.Item>
                        <Menu.Item>选项二</Menu.Item>
                        <Menu.Item disabled>选项三</Menu.Item>
                        <Menu.SubMenu title="分组">
                            <Menu.Item>分组一</Menu.Item>
                            <Menu.Item>分组二</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Group title="分类">
                            <Menu.Item>分类一</Menu.Item>
                            <Menu.Item>分类二</Menu.Item>
                        </Menu.Group>
                    </Menu>
                </Example>

            </Common>

            <Common title="API" >

                <Common title="Menu" >
                    <ApiProps childrenData={propsMenuData} />
                </Common>

                <Common title="Menu.Item" >
                    <ApiProps childrenData={propsMenuItemData} />
                </Common>

                <Common title="Menu.SubMenu" >
                    <ApiProps childrenData={propsMenuSubMenuData} />
                </Common>

                <Common title="Menu.Group" >
                    <ApiProps childrenData={propsMenuGroupData} />
                </Common>
            </Common>

        </div >
    )
}
export default ViewMenu;