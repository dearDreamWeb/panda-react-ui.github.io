import React from "react";



interface ApiAllProps extends React.HTMLAttributes<HTMLElement> {
    childrenData: string[][]
}

const ApiProps: React.FC<ApiAllProps> = (props) => {
    const header = ["参数", "说明", "类型", "默认值"];
    const { childrenData } = props;
    const classes: string[] = ["props", "descript", "type", "default"];
    return (
        <div className="api-props">
            <header className="api-porps-header">
                {header.map((item, index) => {
                    return (
                        <div key={index}>
                            {item}
                        </div>
                    )
                })}
            </header>
            <main className="api-porps-main">
                {childrenData.map((item, index) => {
                    return (
                        <div className="api-props-main-item" key={index}>
                            {
                                item.map((subItem, subIndex) => {
                                    return (
                                        <div key={subIndex} className={classes[subIndex]}>
                                            {subItem}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })}
            </main>
        </div>
    )
}

export default ApiProps;