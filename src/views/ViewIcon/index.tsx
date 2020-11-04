import React from "react";
import "./index.scss";
import Common, { Example } from "../Common";
import Button from "../../components/Button";
import Icon from "../../components/Icon";

const ViewIcon: React.FC<HTMLElement> = () => {
    const icons = ["address-book", "address-card", "angry", "arrow-alt-circle-down", "arrow-alt-circle-left", "arrow-alt-circle-right", "arrow-alt-circle-up", "bell", "bell-slash", "bookmark", "building", "calendar", "calendar-alt", "calendar-check", "calendar-minus", "calendar-plus", "calendar-times", "caret-square-down", "caret-square-left", "caret-square-right", "caret-square-up", "chart-bar", "check-circle", "check-square", "circle", "clipboard", "clock", "clone", "closed-captioning", "comment", "comment-alt", "comment-dots", "comments", "compass", "copy", "copyright", "credit-card", "dizzy", "dot-circle", "edit", "envelope", "envelope-open", "eye", "eye-slash", "file", "file-alt", "file-archive", "file-audio", "file-code", "file-excel", "file-image", "file-pdf", "file-powerpoint", "file-video", "file-word", "flag", "flushed", "folder", "folder-open", "frown", "frown-open", "futbol", "gem", "grimace", "grin", "grin-alt", "grin-beam", "grin-beam-sweat", "grin-hearts", "grin-squint", "grin-squint-tears", "grin-stars", "grin-tears", "grin-tongue", "grin-tongue-squint", "grin-tongue-wink", "grin-wink", "hand-lizard", "hand-paper", "hand-peace", "hand-point-down", "hand-point-left", "hand-point-right", "hand-point-up", "hand-pointer", "hand-rock", "hand-scissors", "hand-spock", "handshake", "hdd", "heart", "hospital", "hourglass", "id-badge", "id-card", "image", "images", "keyboard", "kiss", "kiss-beam", "kiss-wink-heart", "laugh", "laugh-beam", "laugh-squint", "laugh-wink", "lemon", "life-ring", "lightbulb", "list-alt", "map", "meh", "meh-blank", "meh-rolling-eyes", "minus-square", "money-bill-alt", "moon", "newspaper", "object-group", "object-ungroup", "paper-plane", "pause-circle", "play-circle", "plus-square", "question-circle", "registered", "sad-cry", "sad-tear", "save", "share-square", "smile", "smile-beam", "smile-wink", "snowflake", "square", "star", "star-half", "sticky-note", "stop-circle", "sun", "surprise", "thumbs-down", "thumbs-up", "times-circle", "tired", "trash-alt", "user", "user-circle", "window-close", "window-maximize", "window-minimize", "window-restore"];

    const str = ` ~~~js
    import { Button, Icon } from "panda-react-ui";
    import "Panda-react-ui/dist/index.css";
    
    <Icon icon="arrow-alt-circle-down" />
    <Icon icon="share" theme="primary" />
    <Icon icon="check-circle" theme="success" />
    <Icon icon="info" theme="info" />
    <Icon icon="exclamation-triangle" theme="warning" />
    <Icon icon="exclamation-circle" theme="danger" />
    <Button btnType="primary"><Icon icon="share" /> 分享</Button>`;


    return (
        <div className="view-icon">
            <Common title="Icon 图标" >
                提供了一套常用的图标集合。
            </Common>

            <Common title="代码示例">
                <Example codeDescription="直接通过设置属性icon来定义图标的样式和theme定义图标的颜色。" codeContent={str} title="使用方法" >
                    <div className="icon-wrapper">
                        <Icon icon="arrow-alt-circle-down" className="icon-wrapper-item" />
                        <Icon icon="share" theme="primary" className="icon-wrapper-item" />
                        <Icon icon="check-circle" theme="success" className="icon-wrapper-item" />
                        <Icon icon="info" theme="info" className="icon-wrapper-item" />
                        <Icon icon="exclamation-triangle" theme="warning" className="icon-wrapper-item" />
                        <Icon icon="exclamation-circle" theme="danger" className="icon-wrapper-item" />
                        <Button btnType="primary"><Icon icon="share" /> 分享</Button>
                    </div>
                </Example>
            </Common>


            <Common title="图标集合" >
                <div className="icon-all">
                    {icons.map((item: any, index) => {
                        return (
                            <div key={index} className="icon-all-item">
                                <Icon icon={item} className="icon-all-item-icon" />
                                <p>{item}</p>
                            </div>
                        )
                    })}
                </div>
            </Common>

        </div>
    )
}
export default ViewIcon;