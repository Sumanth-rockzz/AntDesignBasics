import React from "react";
import "./App.css";
import { Input } from "antd";
import {
  UserOutlined,
  SecurityScanFilled,
  DollarCircleFilled,
} from "@ant-design/icons";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Input.Search
          placeholder="UserName"
          maxLength={10}
          minLength={4}
          prefix={<UserOutlined />}
          suffix={<DollarCircleFilled />}
          allowClear
          disabled={false}
        ></Input.Search>
        <Input
          placeholder="Password"
          maxLength={10}
          minLength={4}
          type="password"
          prefix={<SecurityScanFilled />}
          allowClear
        ></Input>
      </header>
    </div>
  );
};

export default App;
