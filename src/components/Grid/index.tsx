import React from "react";
import "./index.scss";
import classnames from "classnames";
import Col, { ColProps } from "./Col";

export { Col }

interface RowProps extends React.HTMLAttributes<HTMLElement> {
    className?: string,
    gutter?: number,
    style?: React.CSSProperties
}

const Row: React.FC<RowProps> = (props) => {
    const { className, gutter, children, ...restProps } = props;
    const classes = classnames("pa-row", className);

    // 当有gutter时，设置Row的margin
    const gutterRowStyle = gutter ? { marginLeft: -gutter / 2 + "px", marginRight: -gutter / 2 + "px" } : {};

    const renderChildren = () => {
        return React.Children.map(children, (child) => {
            const childEl = child as React.FunctionComponentElement<ColProps>;
            if (childEl.type.displayName === "Col") {
                return React.cloneElement(childEl, { style: gutter ? { paddingLeft: gutter / 2 + "px", paddingRight: gutter / 2 + "px" } : {} });
            } else {
                return child;
            }
        })
    }

    return (
        <div className={classes} style={gutterRowStyle} {...restProps}>
            {renderChildren()}
        </div>
    )
}

type ItemMenuComponent = React.FC<RowProps> & {
    Col: React.FC<ColProps>
}
const TransRow = Row as ItemMenuComponent;
TransRow.Col = Col;

export default TransRow;