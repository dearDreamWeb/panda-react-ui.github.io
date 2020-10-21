import React from "react";
import { render, RenderResult, fireEvent, cleanup, wait } from "@testing-library/react";
import Menu, { MenuProps } from "./index";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";

// Menu组件参数
const testProps: MenuProps = {
    defaultIndex: "0",
    onSelect: jest.fn(),
    className: "test"
}

// mode改为vertical
const testVerProps: MenuProps = {
    defaultIndex: "0",
    onSelect: jest.fn(),
    mode: "vertical"
}


// 模拟的组件
const mockMenu = (props: any) => {
    return (
        <Menu {...props}>
            <MenuItem>
                menuItem1
        </MenuItem>
            <MenuItem>
                menuItem2
        </MenuItem>
            <MenuItem disabled={true}>
                menuItem3
        </MenuItem>
            <SubMenu title="dropdown">
                <MenuItem>dropdown1</MenuItem>
                <MenuItem>dropdown2</MenuItem>
                <MenuItem disabled={true}>dropdown3</MenuItem>
            </SubMenu>
        </Menu>
    )
}
// 创建css文件，控制SubMenu组件的显示和隐藏
const cssFile = () => {
    const createCss: string = `
        .pa-submenu{
            display:none
        }
        .pa-submenu.open-submenu{
            display:block
        }
    `
    const style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = createCss;
    return style;
}

let wrapper: RenderResult, menuEl: HTMLElement, activeEl: HTMLElement, disabledEl: HTMLElement, dropdownEl: HTMLElement;
// 测试menu
describe("test menu", () => {
    beforeEach(() => {
        wrapper = render(mockMenu(testProps));
        menuEl = wrapper.getByTestId("test-menu");
        activeEl = wrapper.getByText("menuItem1");
        disabledEl = wrapper.getByText("menuItem3");
    })

    // Menu和MenuItem的基础测试
    it("base Menu and MenuItem", () => {
        expect(menuEl).toBeInTheDocument();
        expect(menuEl).toHaveClass("pa-menu");
        expect(activeEl).toHaveClass("menu-item is-active");
        expect(disabledEl).toHaveClass("menu-item is-disabled");
        expect(menuEl.querySelectorAll(":scope > li").length).toEqual(4);
    })

    // 点击后看是否改变class和回调
    it("change active", () => {
        const secondItem = wrapper.getByText("menuItem2");
        // 点击第二个子元素
        fireEvent.click(secondItem);
        expect(secondItem).toHaveClass("is-active");
        expect(activeEl).not.toHaveClass("is-active");
        expect(testProps.onSelect).toHaveBeenCalledWith("1");
        // 点击disabled属性的元素,不希望class添加
        fireEvent.click(disabledEl);
        expect(disabledEl).not.toHaveClass("is-active");
        expect(testProps.onSelect).toHaveBeenCalledWith("1");
    })

    // 改变mode为vertical看是否渲染对应的class
    it("change mode", () => {
        cleanup();
        const wrapper = render(mockMenu(testVerProps));
        const menuEl = wrapper.getByTestId("test-menu");
        expect(menuEl).toHaveClass("menu-vertical");
    })
})

// 测试SubMenu组件
describe("test SubMenu", () => {

    // 测试SubMenu组件mode为horizontal的hover功能
    it("SubMenu mode horizontal hover", async () => {
        wrapper = render(mockMenu(testProps));
        wrapper.container.append(cssFile());   // 填充css文件
        activeEl = wrapper.getByText("menuItem1");
        disabledEl = wrapper.getByText("dropdown3");  // 状态为disabled的组件
        dropdownEl = wrapper.getByText("dropdown");
        // 初始状态不显示
        expect(wrapper.getByText("dropdown1")).not.toBeVisible();
        // 鼠标移入显示
        fireEvent.mouseEnter(dropdownEl);
        await wait(() => {
            expect(wrapper.getByText("dropdown1")).toBeVisible();
        })

        // 点击dropdown1，看参数
        fireEvent.click(wrapper.getByText("dropdown1"));
        expect(testProps.onSelect).toBeCalledWith("3-1");
        expect(activeEl).not.toHaveClass("is-active");
        expect(wrapper.getByText("dropdown1")).toHaveClass("is-active");

        // 看disabled的组件是否显示is-disabled的class类名
        expect(disabledEl).toHaveClass("is-disabled");

        // 点击disabledEl，看onSelect参数是否改变
        fireEvent.click(disabledEl);
        expect(testProps.onSelect).toBeCalledWith("3-1");
        expect(disabledEl).not.toHaveClass("is-active");

        // 鼠标移出消失
        fireEvent.mouseLeave(dropdownEl);
        await wait(() => {
            expect(wrapper.getByText("dropdown1")).not.toBeVisible();
        })

    })

    // 测试SubMenu组件mode为vertical时的click功能
    it("SubMenu mode vertical click", () => {
        wrapper = render(mockMenu(testVerProps));
        wrapper.container.append(cssFile());   // 填充css文件
        activeEl = wrapper.getByText("menuItem1");
        disabledEl = wrapper.getByText("dropdown3");  // 状态为disabled的组件
        dropdownEl = wrapper.getByText("dropdown");
        const menuEl = wrapper.getByTestId("test-menu");
        expect(menuEl).toHaveClass("menu-vertical");
        expect(wrapper.getByText("dropdown1")).not.toBeVisible();
        // 点击dropdown，显示子组件
        fireEvent.click(dropdownEl);
        expect(wrapper.getByText("dropdown1")).toBeVisible();
        // 点击dropdown1，看参数
        fireEvent.click(wrapper.getByText("dropdown1"));
        expect(testProps.onSelect).toBeCalledWith("3-1");
        expect(activeEl).not.toHaveClass("is-active");
        expect(wrapper.getByText("dropdown1")).toHaveClass("is-active");

        // 看disabled的组件是否显示is-disabled的class类名
        expect(disabledEl).toHaveClass("is-disabled");

        // 点击disabledEl，看onSelect参数是否改变
        fireEvent.click(disabledEl);
        expect(testProps.onSelect).toBeCalledWith("3-1");
        expect(disabledEl).not.toHaveClass("is-active");
    })

    // 测试SubMenu组件mode为vertical的默认打开功能
    it("SubMenu defaultOpenKeys", () => {
        wrapper = render(mockMenu({ ...testVerProps, defaultOpenKeys: ["3"] }));
        wrapper.container.append(cssFile());   // 填充css文件
        expect(wrapper.getByText("dropdown1")).toBeVisible();
    })
})