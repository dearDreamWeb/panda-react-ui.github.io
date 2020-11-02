import React from 'react';
import { Switch, Route } from "react-router-dom";
import './index.scss';
import Introduce from "../Introduce";
import UseStart from "../UseStart";
import ViewButton from "../ViewButton";
import ViewIcon from "../ViewIcon";
import ViewDivider from "../ViewDivider";
import ViewMenu from "../ViewMenu";


const IndexContent: React.FC = () => {
    return (
        <div className="index-content">
            <Switch>
                <Route exact path="/" component={Introduce} />
                <Route path="/use" component={UseStart} />
                <Route path="/button" component={ViewButton} />
                <Route path="/icon" component={ViewIcon} />
                <Route path="/divider" component={ViewDivider} />
                <Route path="/menu" component={ViewMenu} />
            </Switch>
        </div>
    )
}
export default IndexContent;