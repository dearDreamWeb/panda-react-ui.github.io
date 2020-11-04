import React, { useRef, useEffect } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './App.scss';
import Menu from "../../components/Menu";
import IndexContent from "../IndexContent";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);

const logo = require("../../assets/images/logo.png");
const githubSvg = require("../../assets/images/github-brands.svg");

// 菜单导航列表的参数
interface menuListProps {
  title: string,
  path?: string,
  children?: Array<menuListProps>
}
// 菜单导航的列表
const menuList: Array<menuListProps> = [
  {
    title: "Panda-react-ui",
    path: "/"
  },
  {
    title: "开始使用",
    path: "/use"
  },
  {
    title: "通用",
    children: [
      {
        title: "Icon 图标",
        path: "/icon"
      },
      {
        title: "Button 按钮",
        path: "/button"
      },
    ]
  },
  {
    title: "布局",
    children: [
      {
        title: "Divider 分割线",
        path: "/divider"
      },
      {
        title: "Grid 栅格",
        path: "/grid"
      },
    ]
  },
  {
    title: "导航",
    children: [
      {
        title: "Menu 菜单",
        path: "/menu"
      }
    ]
  }
]

// 遍历找到初始的路由对应导航的坐标
const initIndex = (): string => {
  let resultIndex: string = "0";
  menuList.forEach((item, itemIndex) => {
    if (item.path === window.location.hash.slice(1)) {
      return resultIndex = itemIndex.toString();
    }
    if (item.children) {
      item.children.forEach((child, childIndex) => {
        if (child.path === window.location.hash.slice(1)) {
          return resultIndex = `${itemIndex.toString()}-${(childIndex + 1).toString()}`;
        }
      })
    }
  })
  return resultIndex;
}

function App() {
  const aside = useRef<HTMLElement>(null);
  useEffect(() => {
    changeAsideH();
  }, [])

  // 根据窗口的大小来改变左侧导航栏的高度
  const changeAsideH = () => {
    let timer: number;
    window.addEventListener("resize", () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        let asideRef = aside.current as HTMLElement;
        asideRef.style.height = "calc(100vh - 60px)";
      }, 500)
    })
  }

  return (
    <Router>
      <Route path="/">
        <div className="App">
          <header className="header">
            <div className="header-left">
              <img src={logo} alt="logo" className="logo" />
              <span className="title">Panda-react-ui</span>
            </div>
            <div className="header-right">
              <a href="https://github.com/dearDreamWeb/panda-ui.github.io" target="_blank" rel="noopener noreferrer">
                <img src={githubSvg} alt="githubSvg" className="githubSvg" />
              </a>
            </div>
          </header>
          <main className="container">
            {/* 左侧导航栏 */}
            <aside className="aside" ref={aside}>
              <Menu mode="vertical" defaultIndex={initIndex()}>
                {
                  menuList.map((item, index) => {
                    if (item.children) {
                      return (
                        <Menu.Group key={index} title={item.title}>
                          {item.children.map((subItem, subIndex) => {
                            return (
                              <Menu.Item key={subIndex}>
                                <Link to={subItem.path ? subItem.path : "/"}>
                                  {subItem.title}
                                </Link>
                              </Menu.Item>
                            )
                          })}
                        </Menu.Group>
                      )
                    } else {
                      return (
                        <Menu.Item key={index}>
                          <Link to={item.path ? item.path : "/"}>
                            {item.title}
                          </Link>
                        </Menu.Item>
                      )
                    }
                  })
                }
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
