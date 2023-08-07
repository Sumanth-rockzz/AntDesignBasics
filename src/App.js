import React, { useState } from "react";
import "./App.css";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";

const App = () => {
  const [loading, setLoading] = useState(false);
  const onclickHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="App">
      <div className="AppHeader">
        <Button
          type="primary"
          on
          onClick={onclickHandler}
          loading={loading}
          icon={<PoweroffOutlined />}
          className="my-button"
          style={{ backgroundColor: "yellow" }}
        >
          Submit
        </Button>
        <Button type="link" href="#">
          Submit
        </Button>
        <Button type="default">Submit</Button>
        <Button type="dashed" block>
          Submit
        </Button>
        <Button type="text">Submit</Button>
      </div>
    </div>
  );
};

export default App;
