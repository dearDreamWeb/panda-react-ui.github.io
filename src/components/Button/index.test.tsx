import React from "react";
import { render } from "@testing-library/react";
import Button,{ ButtonType, ButtonSize } from "./index";

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
        const wrapper = render(<Button btnType={ButtonType.Primary} size={ButtonSize.Large}>good</Button>)
        const el = wrapper.getByText("good");
        expect(el).toHaveClass(`btn ${"btn-"+ButtonType.Primary} ${"btn-"+ButtonSize.Large}`);
    })
    // 绑定事件
    it("bind events",()=>{
        const wrapper = render(<Button onClick={()=>console.log("ok")}>events</Button>);
        const el = wrapper.getByText("events");
        
    })
})