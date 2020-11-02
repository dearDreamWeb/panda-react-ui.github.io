import React from "react";
import "./index.scss";
import Common, { Example, ApiProps } from "../Common";
import Row from "../../components/Grid";


const ViewGrid: React.FC<HTMLElement> = () => {
    // Row的api参数数据
    const apiRowData: string[][] = [
        ["gutter", "栅格间隔，单位：px", "number", "-"],
        ["className", "自定义 Row 类名", "string", "-"],
        ["style", "自定义 Row 样式", "React.CSSProperties", "-"],
    ];

    // Col的api参数数据
    const apiColData: string[][] = [
        ["span", "栅格占位格数，设置为 0 时相当于设置 display: none", "number", "-"],
        ["offset", "栅格向右偏移的格数", "number", "-"],
        ["xs", "响应式栅格，屏幕 < 576px 生效", "number", "-"],
        ["sm", "响应式栅格，屏幕 ≥ 576px 生效", "number", "-"],
        ["md", "响应式栅格，屏幕 ≥ 768px 生效", "number", "-"],
        ["lg", "响应式栅格，屏幕 ≥ 992px 生效", "number", "-"],
        ["xl", "响应式栅格，屏幕 ≥ 1200px 生效", "number", "-"],
        ["className", "自定义 Row 类名", "string", "-"],
        ["style", "自定义 Row 样式", "React.CSSProperties", "-"],
    ];

    // 第一个例子代码
    const str = ` ~~~js
    import { Row } from "panda-ui";
    <Row>
        <Row.Col span={12}>Col-12</Row.Col>
        <Row.Col span={12}>Col-12</Row.Col>
    </Row>
    <Row>
        <Row.Col span={8}>Col-8</Row.Col>
        <Row.Col span={8}>Col-8</Row.Col>
        <Row.Col span={8}>Col-8</Row.Col>
    </Row>
    <Row>
        <Row.Col span={6}>Col-6</Row.Col>
        <Row.Col span={6}>Col-6</Row.Col>
        <Row.Col span={6}>Col-6</Row.Col>
        <Row.Col span={6}>Col-6</Row.Col>
    </Row>`;

    // 第二个例子代码
    const str1 = ` ~~~js
    import { Row } from "panda-ui";
    <Row>
        <Row.Col span={4}>Col-4</Row.Col>
        <Row.Col span={4} offset={4}>Col-4</Row.Col>
        <Row.Col span={4} offset={4}>Col-4</Row.Col>
        <Row.Col span={4}>Col-4</Row.Col>
    </Row>`;

    // 第三个例子代码
    const str2 = ` ~~~js
    import { Row } from "panda-ui";

    const style1 = { background: '#1bd3ef', padding: '1rem 0' };
    const style2 = { background: '#10c5e1', padding: '1rem 0' };

    <Row gutter={20}>
        <Row.Col span={8}>
            <div style={style1}>Col-8</div>
        </Row.Col>
        <Row.Col span={8}>
            <div style={style2}>Col-8</div>
        </Row.Col>
        <Row.Col span={8}>
            <div style={style1}>Col-8</div>
        </Row.Col>
    </Row>`;

    // 第四个例子代码
    const str3 = ` ~~~js
    import { Row } from "panda-ui";
    <Row className="row">
        <Row.Col xs={24} sm={12} md={8} lg={6} xl={3}>Col</Row.Col>
        <Row.Col xs={24} sm={12} md={8} lg={6} xl={3}>Col</Row.Col>
        <Row.Col xs={24} sm={12} md={8} lg={6} xl={3}>Col</Row.Col>
        <Row.Col xs={24} sm={12} md={8} lg={6} xl={3}>Col</Row.Col>
        <Row.Col xs={24} sm={12} md={8} lg={6} xl={3}>Col</Row.Col>
        <Row.Col xs={24} sm={12} md={8} lg={6} xl={3}>Col</Row.Col>
        <Row.Col xs={24} sm={12} md={8} lg={6} xl={3}>Col</Row.Col>
        <Row.Col xs={24} sm={12} md={8} lg={6} xl={3}>Col</Row.Col>
    </Row>`;


    return (
        <div className="view-grid">
            <Common title="Grid 栅格" >
                24 栅格系统。
            </Common>

            <Common title="何时使用" >
                快速实现响应式布局。
            </Common>

            <Common title="代码示例">
                {/* 第一个例子代码 */}
                <Example title="基础栅格" codeDescription="使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。" codeContent={str} >
                    <Row className="row">
                        <Row.Col span={12}>Col-12</Row.Col>
                        <Row.Col span={12}>Col-12</Row.Col>
                    </Row>
                    <Row className="row">
                        <Row.Col span={8}>Col-8</Row.Col>
                        <Row.Col span={8}>Col-8</Row.Col>
                        <Row.Col span={8}>Col-8</Row.Col>
                    </Row>
                    <Row className="row">
                        <Row.Col span={6}>Col-6</Row.Col>
                        <Row.Col span={6}>Col-6</Row.Col>
                        <Row.Col span={6}>Col-6</Row.Col>
                        <Row.Col span={6}>Col-6</Row.Col>
                    </Row>
                </Example>

                {/* 第二个例子代码 */}
                <Example title="区块偏移" codeDescription="使用 offset 属性使区块向右侧偏移。" codeContent={str1} >
                    <Row className="row">
                        <Row.Col span={4}>Col-4</Row.Col>
                        <Row.Col span={4} offset={4}>Col-4</Row.Col>
                        <Row.Col span={4} offset={4}>Col-4</Row.Col>
                        <Row.Col span={4}>Col-4</Row.Col>
                    </Row>
                </Example>

                {/* 第三个例子代码 */}
                <Example title="区块间隔" codeDescription="使用 gutter 属性设置区块间隔。" codeContent={str2} >
                    <Row gutter={20} className="row-gutter">
                        <Row.Col span={8}>
                            <div className="col-item">Col-8</div>
                        </Row.Col>
                        <Row.Col span={8}>
                            <div className="col-item">Col-8</div>
                        </Row.Col>
                        <Row.Col span={8}>
                            <div className="col-item">Col-8</div>
                        </Row.Col>
                    </Row>
                </Example>

                {/* 第四个例子代码 */}
                <Example title="响应式布局" codeDescription="span 和 offset 默认所有宽度下生效，具体设置见 Options，设置 sm、md、lg、xl 属性覆盖以实现响应式布局。" codeContent={str3} >
                    <Row className="row">
                        <Row.Col xs={24} sm={12} md={8} lg={6} xl={3}>Col</Row.Col>
                        <Row.Col xs={24} sm={12} md={8} lg={6} xl={3}>Col</Row.Col>
                        <Row.Col xs={24} sm={12} md={8} lg={6} xl={3}>Col</Row.Col>
                        <Row.Col xs={24} sm={12} md={8} lg={6} xl={3}>Col</Row.Col>
                        <Row.Col xs={24} sm={12} md={8} lg={6} xl={3}>Col</Row.Col>
                        <Row.Col xs={24} sm={12} md={8} lg={6} xl={3}>Col</Row.Col>
                        <Row.Col xs={24} sm={12} md={8} lg={6} xl={3}>Col</Row.Col>
                        <Row.Col xs={24} sm={12} md={8} lg={6} xl={3}>Col</Row.Col>
                    </Row>
                </Example>
            </Common>

            <Common title="API">
                <Common title="Row">
                    <ApiProps childrenData={apiRowData} />
                </Common>

                <Common title="Col">
                    <ApiProps childrenData={apiColData} />
                </Common>
            </Common>
        </div>
    )
}
export default ViewGrid;