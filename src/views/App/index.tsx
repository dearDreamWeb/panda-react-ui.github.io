import React from 'react';
import './App.scss';
import Button, { ButtonType, ButtonSize } from "../../components/Button";
import Menu from "../../components/Menu";
import MenuItem from "../../components/Menu/MenuItem";
import SubMenu from "../../components/Menu/SubMenu";

function App() {
  return (
    <div className="App">
      <div className="btn-wrap">
        <Button btnType={ButtonType.Default}>default</Button>
        <Button btnType={ButtonType.Primary}>primary</Button>
        <Button btnType={ButtonType.Warning}>warnning</Button>
        <Button btnType={ButtonType.Danger} disabled={true}>danger</Button>
        <Button btnType={ButtonType.Danger}>danger</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>primary large</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>primary small</Button>
        <Button btnType={ButtonType.Link}>danger</Button>
        <Button btnType={ButtonType.Link} href="www.blogwxb.cn" disabled={true}>primary</Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.Large} href="www.blogwxb.cn">primary large</Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.Small} href="www.blogwxb.cn">primary small</Button>

      </div>
      <Menu mode="vertical">
        <MenuItem disabled={true}>
          子组件1
        </MenuItem>
        <MenuItem>
          子组件2
        </MenuItem>
        <MenuItem >
          子组件3
        </MenuItem>
        <SubMenu title="下拉菜单">
          <MenuItem disabled={true}>
            选项1
          </MenuItem>
          <MenuItem>
            选项2
        </MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;
