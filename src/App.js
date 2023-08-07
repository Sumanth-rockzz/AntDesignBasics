import React from "react";
import "./App.css";
import { Progress } from "antd";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Progress percent={33} status="active" />
        <Progress percent={33} type="circle" status="exception" />
        <Progress
          percent={33}
          type="dashboard"
          strokeColor="red"
          status="active"
        />
        <Progress
          percent={33}
          type="line"
          strokeWidth="50px"
          status="success"
        />
        <Progress
          percent={33}
          type="line"
          strokeWidth="50px"
          status="success"
          steps={10}
        />
      </header>
    </div>
  );
};
export default App;
