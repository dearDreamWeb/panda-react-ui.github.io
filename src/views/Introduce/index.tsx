import React from "react";
import "./index.scss";
import Common from "../Common";

const Introduce: React.FC<HTMLElement> = () => {
    return (
        <>
            <Common title="Panda-ui">
                Panda-ui 是一套基于Panda-ui的 PC 端 React 组件库，色彩、样式的设计参考了其他成熟组件库。
            </Common>
            <Common title="使用 TypeScript">
                <a href="https://www.tslang.cn/" className="href" target="_blank" rel="noopener noreferrer">TypeScript</a>
                提供了静态类型检查，让开发人员可以在代码运行之前识别某些类型问题。Panda-ui 完全使用 TypeScript 编写，有效增强了代码的健壮性。
            </Common>
        </>
    )
}
export default Introduce;