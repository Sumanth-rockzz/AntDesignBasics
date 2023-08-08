import React, { useEffect, useState } from "react";
import "./App.css";
import { Table, Tag } from "antd";
import { getToDoList } from "./API/API";
const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [alreadySelectedRows, setAlreadySelectedRows] = useState([
    "1",
    "2",
    "3",
  ]);
  useEffect(() => {
    setLoading(true);
    getToDoList().then((data) => {
      data = data.map((todo) => {
        todo.key = todo.id;
        return todo;
      });
      setTodoList(data);
      setLoading(false);
      setTotalCount(data.length);
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
        const color = completed ? "blue" : "red";
        return (
          <Tag color={color}>{completed ? "Completed" : "In Progress"}</Tag>
        );
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
          rowSelection={{
            type: "checkbox",
            onSelect: (data) => {
              console.log(data);
            },
            selectedRowKeys: alreadySelectedRows,
            onChange: (keys) => {
              setAlreadySelectedRows(keys);
            },
            getCheckboxProps: (data) => ({
              disabled: data.completed === true,
            }),
            hideSelectAll: false, //can be set true
            selections: [
              Table.SELECTION_ALL,
              Table.SELECTION_INVERT,
              Table.SELECTION_NONE,
              {
                key: "even",
                text: "Select Even Rows",
                onSelect: (allKeys) => {
                  const selectedKeys = allKeys.filter((key) => key % 2 === 0);
                  setAlreadySelectedRows(selectedKeys);
                },
              },
              {
                key: "completed",
                text: "Select all with Status Completed",
                onSelect: (allKeys) => {
                  const selectedKeys = allKeys.filter((key) => {
                    return todoList.find((list) => {
                      return list.key === key && list.status === "completed";
                    });
                  });
                  setAlreadySelectedRows(selectedKeys);
                },
              },
              {
                key: "progress",
                text: "Select all with Status In Progress",
                onSelect: (allKeys) => {
                  const selectedKeys = allKeys.filter((key) => {
                    return todoList.find((list) => {
                      return list.key === key && list.status !== "completed";
                    });
                  });
                  setAlreadySelectedRows(selectedKeys);
                },
              },
            ],
          }}
          pagination={{
            current: page,
            pageSize: limit,
            total: totalCount, //total count of data here
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
