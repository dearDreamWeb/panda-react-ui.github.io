import React from "react";
import "./index.scss";
import Common, { Example } from "../Common";
import Button from "../../components/Button";

const UseStart: React.FC<HTMLElement> = () => {
    const str = ` ~~~js
    import { Button } from "Panda-react-ui";
    import "Panda-react-ui/dist/index.css";
    <Button btnType="primary">Primary</Button>`
    return (
        <>
            <Common title="开始使用" >
                Panda-react-ui 已发布至 NPM，您可以使用 npm / yarn 来安装。
                <p>$ npm install Panda-react-ui</p>
                <p>$ yarn add Panda-react-ui</p>
            </Common>
            <Common title="简单示例">
                <Example codeDescription="使用Panda-react-ui的Button组件" codeContent={str} title="按钮组件" >
                    <Button btnType="primary">Primary</Button>
                </Example>
            </Common>
        </>
    )
}
export default UseStart;