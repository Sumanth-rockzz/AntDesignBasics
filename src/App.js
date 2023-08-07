import React from "react";
import "./App.css";
import { Table } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

const App = () => {
  const data = [
    {
      name: "Sumanth",
      age: 21,
      city: "Bangalore",
      state: "Karnataka",
      key: 1,
    },
    {
      name: "Likith",
      age: 25,
      city: "Bangalore",
      state: "Karnataka",
      key: 2,
    },
    {
      name: "Charan",
      age: 17,
      city: "Bangalore",
      state: "Karnataka",
      key: 3,
    },
    {
      name: "Gagan",
      age: 19,
      city: "Bangalore",
      state: "Karnataka",
      key: 4,
    },
  ];
  let columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "key",
      render: (value) => {
        return (
          <a href="/" onClick={() => console.log(value)}>
            <UserAddOutlined /> {" " + value}
          </a>
        );
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "key",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "City",
      dataIndex: "city",
      key: "key",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "key",
    },
    {
      title: "Eligible to Vote",
      key: "key",
      render: (payload) => {
        return <p>{payload.age >= 18 ? "True" : "False"}</p>;
      },
    },
  ];
  return (
    <div className="app">
      <header className="app-header">
        <Table pagination={false} dataSource={data} columns={columns}></Table>
      </header>
    </div>
  );
};

export default App;
