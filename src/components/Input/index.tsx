import React from "react";
import classnames from "classnames";
import "./index.scss";

export interface InputProps extends React.HTMLAttributes<HTMLElement> {
    className?: string,
    defaultValue?: string,  // 默认值
    value?: string,  // 输入框值
    addonBefore?: string | React.ReactNode,   // 前置标签
    addonAfter?: string | React.ReactNode,    // 后置标签
    placeholder?: string,
    readOnly?: boolean,   // 只读状态
    error?: boolean,   // 错误状态
}

const Input: React.FC<InputProps> = props => {
    return (
        <div className="input-wrap">

        </div>
    )
}

Input.defaultProps = {
    readOnly: false,
    error: false,
    defaultValue: ""
}

export default Input;