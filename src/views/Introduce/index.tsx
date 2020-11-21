import React from "react";
import "./index.scss";
import Common from "../Common";
import Input from "../../components/Input";

const Introduce: React.FC<HTMLElement> = () => {
    return (
        <>
            <Common title="Panda-react-ui">
                Panda-react-ui 是一套基于 PC 端 React 组件库，色彩、样式的设计参考了其他成熟组件库。
            </Common>
            <Common title="使用 TypeScript">
                <a href="https://www.tslang.cn/" className="href" target="_blank" rel="noopener noreferrer">TypeScript</a>
                提供了静态类型检查，让开发人员可以在代码运行之前识别某些类型问题。Panda-react-ui 完全使用 TypeScript 编写，有效增强了代码的健壮性。
            </Common>
            <Input addonBefore="http://" placeholder="请输入"/>
        </>
    )
}
export default Introduce;