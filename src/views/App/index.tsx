import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.scss';
import Menu from "../../components/Menu";
import MenuGroup from "../../components/Menu/MenuGroup";
import MenuItem from "../../components/Menu/MenuItem";
import SubMenu from "../../components/Menu/SubMenu";
import IndexContent from "../IndexContent";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);

const logo = require("../../assets/images/logo.png");
const githubSvg = require("../../assets/images/github-brands.svg");

function App() {
  return (
    <Router>
      <Route path="/">
        <div className="App">
          <header className="header">
            <div className="header-left">
              <img src={logo} alt="logo" className="logo" />
              <span className="title">Panda-ui</span>
            </div>
            <div className="header-right">
              <a href="https://github.com/dearDreamWeb/panda-ui.github.io" target="_blank" rel="noopener noreferrer">
                <img src={githubSvg} alt="githubSvg" className="githubSvg" />
              </a>
            </div>
          </header>
          <main className="container">
            {/* 左侧导航栏 */}
            <aside className="aside">
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
                <MenuGroup title="分组">
                  <MenuItem>分组一</MenuItem>
                  <MenuItem>分组二</MenuItem>
                </MenuGroup>
                <SubMenu title="下拉菜单">
                  <MenuItem disabled>
                    选项1
              </MenuItem>
                  <MenuItem>
                    选项2
              </MenuItem>
                  <MenuGroup title="分组">
                    <MenuItem>分组一</MenuItem>
                    <MenuItem>分组二</MenuItem>
                  </MenuGroup>
                </SubMenu>
              </Menu>
            </aside>
            {/* 右侧内容区 */}
            <section className="main">
              <IndexContent />
            </section>
          </main>
        </div>
      </Route>
    </Router>
  );
}

export default App;
