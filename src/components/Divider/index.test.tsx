import React from "react";
import { render } from "@testing-library/react";
import Divider, { DividerProps } from "./index";

describe("test Divider component", () => {
    // 基础测试
    it("test base", () => {
        const wrapper = render(<Divider></Divider>)
        expect(wrapper.getByTestId("test-diviver")).toHaveClass("pa-divider pa-divider-horizontal")
    })

    // 测试mode为vertical时
    it("test mode is vertical", () => {
        const wrapper = render(<Divider mode="vertical"></Divider>)
        expect(wrapper.getByTestId("test-diviver")).toHaveClass("pa-divider pa-divider-vertical")
    })

    it("test mode is horizontal props", () => {
        const wrapper = render(<Divider origin="left"><div>分割线</div></Divider>)
        expect(wrapper.getByTestId("test-diviver")).toHaveClass("pa-divider pa-divider-horizontal");
        expect(wrapper.getByTestId("divider-content")).toHaveClass("pa-divider-inner pa-divider-left")
 
    })
})
