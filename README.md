# 介绍
基于React hooks和Typescript开发的一款ui组件库，名为panda-react-ui

# 项目地址
[项目预览](https://deardreamweb.github.io/panda-ui.github.io/#/)

[项目地址](https://github.com/dearDreamWeb/panda-ui.github.io/tree/npm-data)

# 使用例子
1. 下载panda-react-ui
```
npm install panda-react-ui --save
```
2. 引入css文件
在react ts项目的根目录index.tsx中引入index.css文件
```js
import "panda-react-ui/dist/index.css";
```
3. 使用组件例子
```js
import { Button } from "panda-react-ui";

const App = ()=>{
    return (
        <div>
            <Button>button 按钮</Button>
        </div>
    )
}
export default App;
```