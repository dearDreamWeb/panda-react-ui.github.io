import React from "react";
import classnames from "classnames";
// import "./index.scss";

export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
    mode?: "horizontal" | "vertical",
    className?: string,
    origin?: "left" | "center" | "right"
}

const Divider: React.FC<DividerProps> = props => {
    const { mode, className, origin, children, ...restProps } = props;
    const classes = classnames("pa-divider", `pa-divider-${mode}`, className, {
        "pa-ischildren": children && mode === "horizontal"  // 文本有内容只在mode为horizontal中显示
    });
    const childrenClasses = classnames("pa-divider-inner", `pa-divider-${origin}`)

    // 如果child是string说明插入的是段字符串不是标签
    const renderChildren = () => {
        return React.Children.map(children, child => {
            if (typeof child === "string") {
                return (
                    <div className={childrenClasses} data-testid="divider-content">
                        {child}
                    </div>
                );
            } else {
                const childEl = child as React.FunctionComponentElement<DividerProps>;
                return (
                    <div className={childrenClasses} data-testid="divider-content">
                        {React.cloneElement(childEl)}
                    </div>
                )
            }
        })
    }

    return (
        <div className={classes} {...restProps} data-testid="test-diviver">
            {renderChildren()}
        </div>
    )
}

Divider.defaultProps = {
    mode: "horizontal",
    origin: "center"
}

export default Divider;