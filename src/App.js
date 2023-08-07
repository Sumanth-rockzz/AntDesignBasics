import React, { useState } from "react";
import "./App.css";
import { Button, Spin } from "antd";

const App = () => {
  const [spinning, setSpinning] = useState(false);
  const spinHandler = () => {
    setSpinning((prev) => !prev);
  };
  return (
    <div className="app">
      <header className="app-header">
        <Spin spinning={spinning} />
        <Button type="primary" onClick={spinHandler}>
          Toggle Spinning
        </Button>
        <Spin spinning={spinning}>
          <p>Hello !</p>
          <p>Hello !</p>
          <p>Hello !</p>
        </Spin>
      </header>
    </div>
  );
};
export default App;
