import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

describe("test Button component",()=>{
    // 测试默认属性的组件
    it("should render the correct default button",()=>{
        const wrapper = render(<Button>good</Button>);
        const el = wrapper.getByText("good");
        expect(el).toBeInTheDocument();
        expect(el.tagName).toEqual("BUTTON");
        expect(el).toHaveClass("btn btn-default");
    })
    // 根据不同的参数
    it("different props",()=>{
        const wrapper = render(<Button btnType="primary" size="lg">good</Button>)
        const el = wrapper.getByText("good");
        expect(el).toHaveClass(`btn btn-primary btn-lg`);
    })
})