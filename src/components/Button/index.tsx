import React from "react";
import "./index.scss";
import classnames from "classnames";


// button的尺寸
export enum ButtonSize {
    Large = "lg",
    Small = "sm"
}

// button的类型
export enum ButtonType {
    Primary = "primary",
    Default = "default",
    Danger = "danger",
    Warning = "warning",
    Link = "link"     // 链接类型
}

// button的参数
interface BaseButtonProps {
    className?: string,
    disabled?: boolean,
    size?: ButtonSize,
    btnType?: ButtonType,
    children?: React.ReactNode,
    href?: string
}

const Button: React.FC<BaseButtonProps> = props => {
    const { disabled, size, btnType, children, href } = props;
    const classes = classnames("btn", {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        "disabled": btnType === ButtonType.Link && disabled
    })
    // 判断是否为link类型，是的话就是a标签，不是就是button标签
    if (btnType === ButtonType.Link && href) {
        return (
            <a
              className={classes}
              href={href}
            >{children}</a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps={
    disabled:false,
    btnType:ButtonType.Default
}

export default Button;