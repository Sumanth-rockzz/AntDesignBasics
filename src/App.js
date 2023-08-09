import React from "react";
import "./App.css";
import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Form
          labelCol={{ span: 10 }}
          labelAlign={{ span: 10 }}
          onFinish={(values) => {
            console.log(values);
          }}
          style={{ fontWeight: "bold" }}
          autoComplete="off"
          onFinishFailed={(error) => {
            console.log(error);
          }}
        >
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
              {
                whitespace: true,
              },
              {
                min: 3,
                message: "It should have atleast 3 characters ",
              },
              {
                max: 20,
                message: "It can have max 20 characters ",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter your name here" allowClear />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email ID"
            rules={[
              {
                required: true,
                message: "Email Id is required",
              },
              {
                type: "email",
                message: "Please enter a email id",
              },
            ]}
            hasFeedback
          >
            <Input
              placeholder="Enter your email here"
              type="email"
              allowClear
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Password field is required",
              },
              {
                min: 8,
                message: "Password should contain atleast 8 characters",
              },
              {
                validator: (_, value) => {
                  return value && value.includes("a")
                    ? Promise.resolve()
                    : Promise.reject("Password does not match criteria");
                },
              },
            ]}
            hasFeedback
          >
            <Input.Password
              placeholder="Create your new password here"
              allowClear
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Confirm password field is required",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value)
                    return Promise.resolve();
                  return Promise.reject("The Passwords does not match");
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password
              placeholder="Confirm your above entered password here"
              allowClear
            />
          </Form.Item>
          <Form.Item
            name="gender"
            requiredMark="optional"
            label="Gender"
            hasFeedback
          >
            <Select placeholder="Select your gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: "Please select your Date of Birth",
              },
            ]}
            hasFeedback
          >
            <DatePicker style={{ width: "100%" }} picker="date"></DatePicker>
          </Form.Item>
          <Form.Item
            name="portfolio"
            label="Portfolio url"
            rules={[{ type: "url", message: "Please enter valid url" }]}
          >
            <Input placeholder="Add your url here" allowClear />
          </Form.Item>
          <Form.Item
            name="agreement"
            wrapperCol={{ span: 24 }}
            style={{ marginLeft: "70px" }}
            valuePropName="checked"
            rules={[
              {
                validator(_, value) {
                  return value
                    ? Promise.resolve()
                    : Promise.reject("Please accept the terms & conditions");
                },
              },
            ]}
          >
            <Checkbox>
              Agree to our <a href="/">Terms & Conditions</a>
            </Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
};
export default App;
