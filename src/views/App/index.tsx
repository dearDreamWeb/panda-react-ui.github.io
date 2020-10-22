import React from 'react';
import './App.scss';
import Button from "../../components/Button";
import Menu from "../../components/Menu";
import MenuItem from "../../components/Menu/MenuItem";
import SubMenu from "../../components/Menu/SubMenu";
import Icon from "../../components/Icon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);


function App() {
  return (
    <div className="App">
      <Icon icon="coffee" theme="primary" size="3x" />
      <div className="btn-wrap">
        <Button btnType="default">default</Button>
        <Button btnType="primary">primary</Button>
        <Button btnType="warning">warnning</Button>
        <Button btnType="danger" disabled>danger</Button>
        <Button btnType="danger">danger</Button>
        <Button btnType="primary" size="lg">primary large</Button>
        <Button btnType="primary" size="sm">primary small</Button>
        <Button btnType="link">danger</Button>
        <Button btnType="link" href="www.blogwxb.cn" disabled>primary</Button>
        <Button btnType="link" size="lg" href="www.blogwxb.cn">primary large</Button>
        <Button btnType="link" size="sm" href="www.blogwxb.cn">primary small</Button>

      </div>
      <Menu mode="vertical">
        <MenuItem>
          子组件1
        </MenuItem>
        <MenuItem disabled>
          子组件2
        </MenuItem>
        <MenuItem>
          子组件3
        </MenuItem>
        <SubMenu title="下拉菜单">
          <MenuItem disabled>
            选项1
          </MenuItem>
          <MenuItem>
            选项2
          </MenuItem>
          <MenuItem>
            选项3
          </MenuItem>
          <MenuItem>
            选项4
          </MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;
