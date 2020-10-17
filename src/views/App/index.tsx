import React from 'react';
import './App.scss';
import Button, { ButtonType, ButtonSize } from "../../components/Button";

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
