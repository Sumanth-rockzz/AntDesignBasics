import React from "react";
import "./App.css";
import { DatePicker } from "antd";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <DatePicker picker="date" />
        <DatePicker picker="month" />
        <DatePicker picker="year" />
        <DatePicker picker="quarter" />
        <DatePicker picker="time" />
        <DatePicker picker="week" />
        <DatePicker.RangePicker />
        <DatePicker.RangePicker picker="month" />
        <DatePicker.TimePicker />
      </header>
    </div>
  );
};
export default App;
