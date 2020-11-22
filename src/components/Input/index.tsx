import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";
import classnames from "classnames";
import "./index.scss";

type changeEvent = (e: ChangeEvent<HTMLInputElement>) => void;
type selectSize = "lg" | "sm";
export interface InputProps extends Pick<React.InputHTMLAttributes<HTMLElement>, Exclude<keyof React.InputHTMLAttributes<HTMLElement>, "size" | "prefix">> {
    className?: string,
    size?: selectSize,
    disabled?: boolean,
    defaultValue?: string,  // 默认值
    // value?: string,  // 输入框值
    addonBefore?: string | React.ReactNode,   // 前置标签
    addonAfter?: string | React.ReactNode,    // 后置标签
    // prefix?: string | React.ReactNode,    // 前缀标签
    // suffix?: string | React.ReactNode,    // 后缀标签
    placeholder?: string,
    readOnly?: boolean,   // 只读状态
    error?: boolean,   // 错误状态 
    onChange?: changeEvent
}

const Input: React.FC<InputProps> = props => {
    const { className, disabled, defaultValue, size, addonBefore, addonAfter, placeholder, readOnly, error, ...restProps } = props;
    const classNames = classnames("pa-input-wrap", className, {
        [`pa-input-${size}`]: size,
        "is-disabled": disabled,
        "pa-input-addonBefore": addonBefore,
        "pa-input-addonAfter": addonAfter
    });

    const [inputVal, setVal] = useState(defaultValue);

    return (
        <div className={classNames}>
            {addonBefore ? (<span className="addonBefore-content">{addonBefore}</span>) : ""}
            <input type="text"
                className="pa-input"
                value={inputVal}
                placeholder={placeholder}
                onChange={e => { setVal(e.target.value) }}
                disabled={disabled || readOnly}
                {...restProps}
            />
            {addonAfter ? (<span className="addonAfter-content">{addonAfter}</span>) : ""}
        </div>
    )
}

Input.defaultProps = {
    readOnly: false,
    error: false,
    defaultValue: ""
}

export default Input;