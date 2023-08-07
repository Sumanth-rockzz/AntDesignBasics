import React, { useState } from "react";
import "./App.css";
import { Form, Input, Button, message, Alert } from "antd";

const App = () => {
  const [showAlert, setShowAlert] = useState(false);
  const submitHandler = (e) => {
    console.log(e);
    setTimeout(() => {
      setShowAlert(true);
      //message.success(`Logged In as ${e.username} Successfully`, 5); //[error,warning,success]
    }, 2000);
  };
  return (
    <div className="app">
      <header className="app-header">
        {showAlert && (
          <Alert
            type="error"
            message="error"
            description="Something went Wrong"
            closable
          />
        )}
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
