import React, { useState } from 'react';
import Markdown from "react-markdown";
import Transition from "../../components/Transition";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Icon from "../../components/Icon";

interface MarkdowunProps {
    codeContent: string,  // 代码内容
    codeDescription: string,  // 例子描述
    openCode: boolean
}

interface CodeProps {
    language: string,
    value: string
}

const ReactMarkdown = (props: MarkdowunProps) => {
    const { codeContent, codeDescription, openCode } = props;
    const [open, setOpen] = useState(openCode);

    // 渲染markdown中的代码部分
    const renderers = {
        code: (codeProps: CodeProps) => {
            return <SyntaxHighlighter style={vscDarkPlus} language={codeProps.language} children={codeProps.value} />
        }
    }


    return (
        <div className="code-example-box">
            <p className="cod-descript-conetent">
                <span>{codeDescription}</span> 
                <Icon icon="expand-arrows-alt" className="icon-show" title={open ? "隐藏代码" : "显示代码"}
                    onClick={() => setOpen(!open)}
                />
            </p>
            <Transition
                in={open}
                timeout={300}
                animation="slide-in-top"
            >
                <Markdown className="pa-markdown" renderers={renderers} children={codeContent} />
            </Transition>
        </div>
    )
}

ReactMarkdown.displayName = "ReactMarkdown";

ReactMarkdown.defaultProps = {
    openCode: false
}

export default ReactMarkdown;