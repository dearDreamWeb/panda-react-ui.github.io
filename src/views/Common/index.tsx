import React from 'react';
import './index.scss';
import ReactMarkdown from "./ReactMarkdown";
import Example from "./Example";
import ApiProps from "./ApiProps";

export { ReactMarkdown, Example, ApiProps };

interface CommonBaseProps {
    title: string,
    className?: string
}
export type CommonProps = CommonBaseProps & React.HTMLAttributes<HTMLElement>;

const Common: React.FC<CommonProps> = (props) => {
    const { title, className, children, ...restProps } = props;

    const renderChildren = () => {
        return React.Children.map(children, child => {
            if (typeof child === "string") {
                return child;
            } else {
                const childEl = child as React.FunctionComponentElement<CommonProps>;
                return React.cloneElement(childEl)
            }

        })
    }

    return (
        <section className={className} {...restProps} >
            <h2 className="title">{title}</h2>
            <div className="content">
                {renderChildren()}
            </div>
        </section>
    )
}
export default Common;