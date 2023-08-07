import React from "react";
import "./App.css";
import { Select } from "antd";

const App = () => {
  const fruits = ["Banana", "Mango", "Apple", "Orange"];
  return (
    <div className="app">
      <header className="app-header">
        <p>which is Your Favorite fruit</p>
        <Select
          mode="multiple"
          placeholder="Select Fruit"
          style={{ width: "100%", fontWeight: "bold", color: "blue" }}
          allowClear
          maxTagCount={2}
        >
          {fruits.map((fruit, index) => {
            return (
              <Select.Option value={fruit} key={index}>
                {fruit}
              </Select.Option>
            );
          })}
        </Select>
      </header>
    </div>
  );
};

export default App;
