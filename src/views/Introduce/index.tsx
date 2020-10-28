import React from "react";
import "./index.scss";

const Introduce: React.FC<HTMLElement> = () => {
    return (
        <>
            <h2 className="title">
                Panda-ui
                    </h2>
            <p className="introduce">Panda-ui 是一套基于Xue-ui的 PC 端 React 组件库，色彩、样式的设计参考了其他成熟组件库。</p>
            <h2 className="title">
                使用 TypeScript
                    </h2>
            <p className="introduce">
                <a href="https://www.tslang.cn/" className="href" target="_blank" rel="noopener noreferrer">TypeScript</a>
                提供了静态类型检查，让开发人员可以在代码运行之前识别某些类型问题。Xue-react 完全使用 TypeScript 编写，有效增强了代码的健壮性。
            </p>
        </>
    )
}
export default Introduce;