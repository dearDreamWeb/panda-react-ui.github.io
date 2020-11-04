import React from "react";
import "./index.scss";
import Common, { Example, ApiProps } from "../Common";
import Button from "../../components/Button";

const ViewButton: React.FC<HTMLElement> = () => {
    const propsData = [
        ["className", "自定义的class类名", "string", "-"],
        ["disabled", "禁用按钮的状态", "boolean", "false"],
        ["size", "按钮的尺寸", `lg | sm`, "-"],
        ["href", "btnType为link的文字按钮的跳转地址", "string", "-"],
        ["btnType", "设置按钮的类型", `primary | default | danger | warning | link`, "default"]
    ]

    const str = ` ~~~js
    import { Button } from "panda-react-ui";
    import "Panda-react-ui/dist/index.css";

    <Button>默认按钮</Button>
    <Button btnType="primary">主要按钮</Button>
    <Button btnType="warning">警告按钮</Button>
    <Button btnType="danger">危险按钮</Button>
    <Button disabled>Disabled</Button>
    <Button btnType="link">Link</Button>`;

    const str1 = ` ~~~js
    import { Button } from "panda-react-ui";
    import "Panda-react-ui/dist/index.css";

    <Button disabled>默认按钮</Button>
    <Button btnType="primary" disabled>主要按钮</Button>
    <Button btnType="warning" disabled>警告按钮</Button>
    <Button btnType="danger" disabled>危险按钮</Button>
    <Button btnType="link" disabled>文字按钮</Button>`;

    const str2 = ` ~~~js
    import { Button } from "panda-react-ui";
    import "Panda-react-ui/dist/index.css";

    <Button btnType="link">文字按钮</Button>
    <Button btnType="link" disabled>文字按钮</Button>`;

    const str3 = ` ~~~js
    import { Button } from "panda-react-ui";
    import "Panda-react-ui/dist/index.css";
    
    <Button size="lg">大型按钮</Button>
    <Button>默认按钮</Button>
    <Button size="sm">小型按钮</Button>`;


    return (
        <>
            <Common title="Button 按钮" >
                点击以开始即时操作。
            </Common>
            <Common title="何时使用" >
                点击以开始即时操作。
            </Common>
            <Common title="代码示例">
                <Example codeDescription="使用btnType和disabled属性来定义 Button 的样式。" codeContent={str} title="基础的按钮用法。" >
                    <div className="btn-wrapper">
                        <Button>默认按钮</Button>
                        <Button btnType="primary">主要按钮</Button>
                        <Button btnType="warning">警告按钮</Button>
                        <Button btnType="danger">危险按钮</Button>
                        <Button disabled>禁止按钮</Button>
                        <Button btnType="link">文字按钮</Button>
                    </div>
                </Example>

                <Example codeDescription="你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。" codeContent={str1} title="禁用状态" >
                    <div className="btn-wrapper">
                        <Button disabled>默认按钮</Button>
                        <Button btnType="primary" disabled>主要按钮</Button>
                        <Button btnType="warning" disabled>警告按钮</Button>
                        <Button btnType="danger" disabled>危险按钮</Button>
                        <Button btnType="link" disabled>文字按钮</Button>
                    </div>
                </Example>

                <Example codeDescription="没有边框和背景色的按钮。" codeContent={str2} title="文字按钮" >
                    <div className="btn-wrapper">
                        <Button btnType="link">文字按钮</Button>
                        <Button btnType="link" disabled>文字按钮</Button>
                    </div>
                </Example>

                <Example codeDescription="Button 组件提供三种尺寸的按钮，使用size属性来定义按钮的尺寸。" codeContent={str3} title="不同尺寸的按钮" >
                    <div className="btn-wrapper">
                        <Button size="lg">大型按钮</Button>
                        <Button>默认按钮</Button>
                        <Button size="sm">小型按钮</Button>
                    </div>
                </Example>
            </Common>
            
            <Common title="API" >
                <ApiProps childrenData={propsData} />
            </Common>

        </>
    )
}
export default ViewButton;