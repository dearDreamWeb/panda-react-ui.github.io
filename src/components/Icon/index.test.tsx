import React from "react";
import { render, RenderResult } from "@testing-library/react";
import Icon, { IconProps } from "./index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);

let wrapper: RenderResult;
describe("test Icon", () => {
    beforeEach(() => {
        wrapper = render(<Icon icon="coffee" theme="primary"/>)
    })
    it(" test base", () => {
        expect(wrapper.getByTestId("test-icon")).toHaveClass("pa-icon icon-primary");
    })
})