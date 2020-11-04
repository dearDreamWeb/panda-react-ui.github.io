import React from "react";
import "./index.scss";
import Common, { Example, ApiProps } from "../Common";
import Divider from "../../components/Divider";

const ViewDivider: React.FC<HTMLElement> = () => {
    const propsData = [
        ["className", "自定义的class类名", "string", "-"],
        ["mode", "分割线的模式，横向还是竖向", "horizontal | vertical", "horizontal"],
        ["origin", "文字分割线的文字的位置，仅应用在mode为horizontal时", `left | center | right`, "center"]
    ]

    const str = ` ~~~js
    import { Divider } from "panda-react-ui";
    import "Panda-react-ui/dist/index.css";

    <div>
        如果只看到太阳的黑点，那你的生活将缺少温暖;如果你只看到月亮的阴影，那么你的生命历程将难以找到光明;
        如果你总是发现朋友的缺点，你么你的人生旅程将难以找到知音;
        同样，如果你总希望自己完美无缺，假设你的这一愿望真的能如愿以偿，那么你最大的缺点就是没有缺点。
    </div>
    <Divider />
    <div>
        或许是命运的不幸注定要将自己缤纷多彩的梦撞碎;
        或许是天地的无情终归要将自己继日的辛勤当做泡影放飞，
        或许是许许多多的难以理解却又实实在在的障碍与挫折早已将意气丰发的拼搏与百折不挠的进击化为道道忧愁阵阵孤寂，
        那么就请在凄惨中反省我们自己吧!
    </div>
    <Divider />`;

    const str1 = ` ~~~js
    import { Divider } from "panda-react-ui";
    import "Panda-react-ui/dist/index.css";

    <div>
        无论从那里来的，只要是食物，壮健者大抵就无需思索，承认是吃的东西。
        惟有衰病的，却总常想到害胃，伤身，特有许多禁例，许多避忌;
        还有一大套比较利害而终于不得要领的理由，例如吃固无妨，而不吃尤稳，食之或当有益，然究以不吃为宜云云之类。
        但这一类人物总要日见其衰弱的，自己先已失了活气了。——《看镜有感》一九二五年
    </div>
    <Divider origin="left">左边</Divider>
    <div>
        如果痛苦换来的是结识真理、坚持真理，就应自觉的欣然承受，那时，也只有那时，痛苦穿掘着灵魂的深处，使人受了精神底苦刑而得到创伤，又即从这得伤和养伤和愈合中，得到苦的涤除，而上了苏生的路。
    </div>
    <Divider origin="center">中间</Divider>
    <div>
        中国人的性情是总喜欢调和折中的，譬如你说，这屋子太暗，须在这里开一个窗，大家一定不允许的。
        但如果你主张拆掉屋顶他们就来调和，愿意开窗了。——《无声的中国》一九二七年
    </div>
    <Divider origin="right">右边</Divider>`;

    const str2 = ` ~~~js
    import { Divider } from "panda-react-ui";
    import "Panda-react-ui/dist/index.css";
    
    <div>
        左边
        <Divider mode="vertical" />
        中间
        <Divider mode="vertical" />
        右边
    </div>`;




    return (
        <div className="view-divider">
            <Common title="Divider分割线" >
                区隔内容的分割线。
            </Common>
            <Common title="何时使用" >
                对不同章节的文本段落进行分割；对行内文字/链接进行分割，例如表格的操作列。
            </Common>
            <Common title="代码示例">
                <Example codeDescription="默认为水平分割线，可在中间加入文字。" codeContent={str} title="水平分割线" >
                    <div className="divider-wrapper">
                        <div>
                            如果只看到太阳的黑点，那你的生活将缺少温暖;如果你只看到月亮的阴影，那么你的生命历程将难以找到光明;
                            如果你总是发现朋友的缺点，你么你的人生旅程将难以找到知音;
                            同样，如果你总希望自己完美无缺，假设你的这一愿望真的能如愿以偿，那么你最大的缺点就是没有缺点。
                        </div>
                        <Divider />
                        <div>
                            或许是命运的不幸注定要将自己缤纷多彩的梦撞碎;
                            或许是天地的无情终归要将自己继日的辛勤当做泡影放飞，
                            或许是许许多多的难以理解却又实实在在的障碍与挫折早已将意气丰发的拼搏与百折不挠的进击化为道道忧愁阵阵孤寂，
                            那么就请在凄惨中反省我们自己吧!
                        </div>
                        <Divider />
                    </div>
                </Example>

                <Example codeDescription="分割线中带有文字，可以用 origin 指定文字位置。" codeContent={str1} title="带文字的分割线" >
                    <div className="divider-wrapper">
                        <div>
                            无论从那里来的，只要是食物，壮健者大抵就无需思索，承认是吃的东西。
                            惟有衰病的，却总常想到害胃，伤身，特有许多禁例，许多避忌;
                            还有一大套比较利害而终于不得要领的理由，例如吃固无妨，而不吃尤稳，食之或当有益，然究以不吃为宜云云之类。
                            但这一类人物总要日见其衰弱的，自己先已失了活气了。——《看镜有感》一九二五年
                        </div>
                        <Divider origin="left">左边</Divider>
                        <div>
                            如果痛苦换来的是结识真理、坚持真理，就应自觉的欣然承受，那时，也只有那时，痛苦穿掘着灵魂的深处，使人受了精神底苦刑而得到创伤，又即从这得伤和养伤和愈合中，得到苦的涤除，而上了苏生的路。
                        </div>
                        <Divider origin="center">中间</Divider>
                        <div>
                            中国人的性情是总喜欢调和折中的，譬如你说，这屋子太暗，须在这里开一个窗，大家一定不允许的。
                            但如果你主张拆掉屋顶他们就来调和，愿意开窗了。——《无声的中国》一九二七年
                        </div>
                        <Divider origin="right">右边</Divider>
                    </div>
                </Example>

                <Example codeDescription="使用 mode='vertical' 设置为行内的垂直分割线。" codeContent={str2} title="垂直分割线" >
                    <div className="divider-wrapper">
                        <div>
                            左边
                            <Divider mode="vertical" />
                            中间
                            <Divider mode="vertical" />
                            右边
                        </div>
                    </div>
                </Example>

            </Common>

            <Common title="API" >
                <ApiProps childrenData={propsData} />
            </Common>

        </div>
    )
}
export default ViewDivider;