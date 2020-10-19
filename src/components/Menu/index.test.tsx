import React from "react";
import { render, RenderResult, fireEvent, cleanup } from "@testing-library/react";
import Menu, { MenuProps } from "./index";
import MenuItem from "./MenuItem";

// Menu组件参数
const testProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: "test"
}

// mode改为vertical
const testVerProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    mode: "vertical"
}

// 模拟的组件
const mockMenu = (props: any) => {
    return (
        <Menu {...props}>
            <MenuItem index={0}>
                menuItem1
        </MenuItem>
            <MenuItem index={1}>
                menuItem2
        </MenuItem>
            <MenuItem index={2} disabled={true}>
                menuItem3
        </MenuItem>
        </Menu>
    )
}

let wrapper: RenderResult, menuEl: HTMLElement, activeEl: HTMLElement, disabledEl: HTMLElement;
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
        expect(menuEl.getElementsByTagName("li").length).toEqual(3);
    })

    // 点击后看是否改变class和回调
    it("change active", () => {
        const secondItem = wrapper.getByText("menuItem2");
        // 点击第二个子元素
        fireEvent.click(secondItem);
        expect(secondItem).toHaveClass("is-active");
        expect(activeEl).not.toHaveClass("is-active");
        expect(testProps.onSelect).toHaveBeenCalledWith(1);
        // 点击disabled属性的元素,不希望class添加
        fireEvent.click(disabledEl);
        expect(disabledEl).not.toHaveClass("is-active");
        expect(testProps.onSelect).toHaveBeenCalledWith(1);
    })

    // 改变mode为vertical看是否渲染对应的class
    it("change mode", () => {
        cleanup();
        const wrapper = render(mockMenu(testVerProps));
        const menuEl = wrapper.getByTestId("test-menu");
        expect(menuEl).toHaveClass("menu-vertical");
    })
})