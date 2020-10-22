import React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

type AnimationName = "slide-in-top" | "slide-in-bottom" | "slide-in-left" | "slide-in-right";

type TransitionProps = CSSTransitionProps & { animation?: AnimationName };

const Transition: React.FC<TransitionProps> = props => {
    const { children, classNames, animation, ...restProps } = props;
    // 判断children是否为数组，为数组说明有多个子节素，防止动画被覆盖，外面加个div包裹住
    const renderChildren = () => {
        if (Array.isArray(children)) {
            return (
                <div>
                    {children}
                </div>
            )
        }
        return children
    }
    return (
        <CSSTransition
            classNames={classNames ? classNames : animation}
            {...restProps}
        >
            {renderChildren()}
        </CSSTransition>
    )
}
Transition.defaultProps = {
    unmountOnExit: true,  // 根据in的参数，in的参数为true动态加载子元素；in的参数为false动态隐藏子元素
    appear: true
}

export default Transition;