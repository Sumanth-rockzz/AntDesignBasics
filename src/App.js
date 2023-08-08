import React, { useEffect, useState } from "react";
import "./App.css";
import { Table } from "antd";
import { getToDoList } from "./API/API";
const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    setLoading(true);
    getToDoList().then((data) => {
      setTodoList(data);
      setLoading(false);
    });
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "1",
      sorter: (a, b) => {
        return a.id > b.id;
      },
    },
    {
      title: "User Id",
      dataIndex: "userId",
      key: "2",
      sorter: (a, b) => {
        return a.userId > b.userId;
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "3",
    },
    {
      title: "Status",
      dataIndex: "completed",
      key: "4",
      render: (completed) => {
        return completed ? "Completed" : "In Progress";
      },
      filters: [
        { text: "Complete", value: true },
        { text: "In Progress", value: false },
      ],
      onFilter: (value, record) => {
        return record.completed === value;
      },
    },
  ];

  return (
    <div className="app">
      <header className="app-header">
        <Table
          columns={columns}
          dataSource={todoList}
          pagination={{
            current: page,
            pageSize: limit,
            total: 500, //total count of data here
            onChange: (page, limit) => {
              setPage(page);
              setLimit(limit);
              //make an api call here preferred page and limit so that we change dataSource accordingly
            },
          }}
          loading={loading}
          scroll={5}
        ></Table>
      </header>
    </div>
  );
};
export default App;
