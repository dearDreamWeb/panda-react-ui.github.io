import React from 'react';
import { Switch, Route } from "react-router-dom";
import './index.scss';
import Introduce from "../Introduce";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from '@fortawesome/free-solid-svg-icons'
// library.add(fas);


const IndexContent: React.FC = () => {
    return (
        <div className="index-content">
            <Switch>
                <Route exact path="/" component={Introduce} />
            </Switch>
        </div>
    )
}
export default IndexContent;