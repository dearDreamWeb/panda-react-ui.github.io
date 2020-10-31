import React from 'react';
import { Switch, Route } from "react-router-dom";
import './index.scss';
import Introduce from "../Introduce";
import UseStart from "../UseStart";
import Divider from "../../components/Divider";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from '@fortawesome/free-solid-svg-icons'
// library.add(fas);


const IndexContent: React.FC = () => {
    return (
        <div className="index-content">
            <Switch>
                <Route exact path="/" component={Introduce} />
                <Route path="/use" component={UseStart} />
            </Switch>
        </div>
    )
}
export default IndexContent;