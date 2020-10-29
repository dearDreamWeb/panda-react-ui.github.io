import React from 'react';
import { Switch, Route } from "react-router-dom";
import './index.scss';
import Introduce from "../Introduce";
import Divider from "../../components/Divider";
import Menu from "../../components/Menu";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from '@fortawesome/free-solid-svg-icons'
// library.add(fas);


const IndexContent: React.FC = () => {
    return (
        <div className="index-content">
            <Switch>
                <Route exact path="/" component={Introduce} />
            </Switch>  
            <Divider mode="horizontal">text啊</Divider>
            <Menu >
            <Menu.Item>
                menuItem1
        </Menu.Item>
            <Menu.Item>
                menuItem2
        </Menu.Item>
            <Menu.Item disabled={true}>
                menuItem3
        </Menu.Item>
            <Menu.SubMenu title="dropdown">
                <Menu.Item>dropdown1</Menu.Item>
                <Menu.Item>dropdown2</Menu.Item>
                <Menu.Item disabled>dropdown3</Menu.Item>
            </Menu.SubMenu>
        </Menu>
        </div>
    )
}
export default IndexContent;