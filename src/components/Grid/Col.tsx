import React from "react";
import classnames from "classnames";

export interface ColProps extends React.HTMLAttributes<HTMLElement> {
    className?: string,
    style?: React.CSSProperties,
    span?: number,
    offset?: number,
    xs?: number | object,
    sm?: number | object,
    md?: number | object,
    lg?: number | object,
    xl?: number | object,
}

const Col: React.FC<ColProps> = (props) => {
    const { className, span, offset, xs, sm, md, lg, xl, children, style, ...restProps } = props;
    const classes = classnames("pa-col", className, {
        [`col-offset-${offset}`]: typeof offset === "number",
        [`col-span-${span}`]: typeof span === "number",
        [`col-xs-${xs}`]: xs,
        [`col-sm-${sm}`]: sm,
        [`col-md-${md}`]: md,
        [`col-lg-${lg}`]: lg,
        [`col-xl-${xl}`]: xl,
    })
    return (
        <div className={classes} style={style} {...restProps}>
            {children}
        </div>
    )
}

Col.displayName = "Col";

export default Col;

