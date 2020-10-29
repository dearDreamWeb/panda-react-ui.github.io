import React from "react";
import { render, RenderResult, fireEvent, cleanup, wait } from "@testing-library/react";
import Menu, { MenuProps } from "./index";

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
            <Menu.Item>
                menuItem1
        </Menu.Item>
            <Menu.Item>
                menuItem2
        </Menu.Item>
            <Menu.Item disabled={true}>
                menuItem3
        </Menu.Item>
            <Menu.SubMenu title="dropdown">
                <Menu.Item>dropdown1</Menu.Item>
                <Menu.Item>dropdown2</Menu.Item>
                <Menu.Item disabled>dropdown3</Menu.Item>
            </Menu.SubMenu>
        </Menu>
    )
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
        activeEl = wrapper.getByText("menuItem1");
        dropdownEl = wrapper.getByText("dropdown");
        // 鼠标移入显示
        // fireEvent.mouseEnter(dropdownEl);
        // await wait(() => {
        //     expect(wrapper.getByText("dropdown1")).toBeVisible();
        // })

        // 点击dropdown1，看参数
        // fireEvent.click(wrapper.getByText("dropdown1"));
        // expect(testProps.onSelect).toBeCalledWith("3-1");
        // expect(activeEl).not.toHaveClass("is-active");
        // expect(wrapper.getByText("dropdown1")).toHaveClass("is-active");

        // disabledEl = wrapper.getByText("dropdown3");  // 状态为disabled的组件

        // 看disabled的组件是否显示is-disabled的class类名
        expect(disabledEl).toHaveClass("is-disabled");

        // 点击disabledEl，看onSelect参数是否改变
        fireEvent.click(disabledEl);
        // expect(testProps.onSelect).toBeCalledWith("3-1");
        expect(disabledEl).not.toHaveClass("is-active");

        // 鼠标移出消失
        fireEvent.mouseLeave(dropdownEl);
        // await wait(() => {
        //     expect(wrapper.getByText("dropdown1")).not.toBeVisible();
        // })

    })

    // 测试SubMenu组件mode为vertical时的click功能
    it("SubMenu mode vertical click", async () => {
        wrapper = render(mockMenu(testVerProps));
        activeEl = wrapper.getByText("menuItem1");
        dropdownEl = wrapper.getByText("dropdown");
        const menuEl = wrapper.getByTestId("test-menu");

        expect(menuEl).toHaveClass("menu-vertical");

        // 点击dropdown，显示子组件
        fireEvent.click(dropdownEl);
        await wait(() => {
            expect(wrapper.getByText("dropdown1")).toBeVisible();
        })
        // 点击dropdown1，看参数
        // fireEvent.click(wrapper.getByText("dropdown1"));
        // expect(testProps.onSelect).toBeCalledWith("3-1");
        // expect(activeEl).not.toHaveClass("is-active");
        // expect(wrapper.getByText("dropdown1")).toHaveClass("is-active");

        // disabledEl = wrapper.getByText("dropdown3");  // 状态为disabled的组件
        // 看disabled的组件是否显示is-disabled的class类名
        expect(disabledEl).toHaveClass("is-disabled");

        // 点击disabledEl，看onSelect参数是否改变
        fireEvent.click(disabledEl);
        // expect(testProps.onSelect).toBeCalledWith("3-1");
        expect(disabledEl).not.toHaveClass("is-active");
    })

    // 测试SubMenu组件mode为vertical的默认打开功能
    it("SubMenu defaultOpenKeys", () => {
        wrapper = render(mockMenu({ ...testVerProps, defaultOpenKeys: ["3"] }));
        expect(wrapper.getByText("dropdown1")).toBeVisible();
    })
})