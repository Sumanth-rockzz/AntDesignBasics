import React from "react";
import "./App.css";
import { Form, Input, Button } from "antd";

const App = () => {
  const submitHandler = (e) => {
    console.log(e);
  };
  return (
    <div className="app">
      <header className="app-header">
        <Form onFinish={submitHandler}>
          <Form.Item label="User Name" name="username">
            <Input placeholder="User Name" required></Input>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password
              placeholder="Password"
              type="password"
              required
            ></Input.Password>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
};

export default App;
