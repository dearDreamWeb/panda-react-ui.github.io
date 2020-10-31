import React from "react";
import ReactMarkdown from "./ReactMarkdown";
import Divider from "../../components/Divider";
import Icon from "../../components/Icon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit } from '@fortawesome/free-solid-svg-icons'
library.add(faEdit);

interface ExampleCodeProps extends React.HTMLAttributes<HTMLElement> {
    title: string,
    codeDescription: string,
    codeContent: string
}

const ExampleCode: React.FC<ExampleCodeProps> = (props) => {
    const { title, codeDescription, codeContent, children } = props;
    return (
        <div className="example-box">
            <div className="examp-box-header">
                {children}
            </div>
            <Divider origin="left">
                <div>
                    {title}
                    <Icon icon={faEdit} className="icon" />
                </div>
            </Divider>
            <ReactMarkdown codeDescription={codeDescription} codeContent={codeContent} />
        </div>
    )
}

export default ExampleCode;