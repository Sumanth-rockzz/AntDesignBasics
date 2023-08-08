import React, { useState } from "react";
import "./App.css";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Table, message, Modal, Input } from "antd";
const App = () => {
  const [editVisible, setEditVisible] = useState(false);
  const [editStudent, setEditStudent] = useState(null);

  const [dataSource, setDataSource] = useState([
    {
      key: 1,
      id: 1,
      name: "Sumanth",
      email: "Sumanthn876@gmail.com",
      city: "Bangalore",
    },
    {
      key: 2,
      id: 2,
      name: "Likith",
      email: "Likith@gmail.com",
      city: "Bangalore",
    },
    {
      key: 3,
      id: 3,
      name: "Gagan",
      email: "Gagan@gmail.com",
      city: "Bangalore",
    },
    {
      key: 4,
      id: 4,
      name: "Charan",
      email: "charan@gmail.com",
      city: "Bangalore",
    },
  ]);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type your text here"
              value={selectedKeys[0]}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
            ></Input>
            <Button
              icon={<SearchOutlined />}
              type="primary"
              onClick={() => {
                confirm();
              }}
            >
              Search
            </Button>
            <Button
              type="danger"
              onClick={() => {
                clearFilters();
              }}
            >
              Clear
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "City",
      dataIndex: "city",
    },
    {
      key: "5",
      title: "Actions",
      render: (data) => {
        return (
          <div>
            <EditOutlined
              onClick={() => editStudentHandler(data)}
              style={{ color: "blue", marginRight: 15 }}
            />
            <DeleteOutlined
              onClick={() => deleteStudentHandler(data)}
              style={{ color: "red", marginLeft: 15 }}
            />
          </div>
        );
      },
    },
  ];

  const addStudentHandler = () => {
    let randomNumber = Math.random() * 1000;
    const newStudent = {
      key: randomNumber.toFixed(0),
      id: randomNumber.toFixed(0),
      name: "Charan",
      email: "charan@gmail.com",
      city: "Bangalore",
    };
    setDataSource((prev) => {
      return [...prev, newStudent];
    });
    message.success(
      `${newStudent.name}'s record has been created successfully`
    );
  };

  const deleteStudentHandler = (data) => {
    Modal.confirm({
      title: "Are You sure ,You Wanna Delete this student record ",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((prev) => {
          return prev.filter((student) => student.id !== data.id);
        });
        message.success(`${data.name}'s record has been deleted successfully`);
      },
    });
  };

  const editStudentHandler = (record) => {
    setEditVisible(true);
    setEditStudent({ ...record });
  };

  const resetEditingHandler = () => {
    setEditVisible(false);
    setEditStudent(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <Button onClick={addStudentHandler}>Create New Student</Button>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Student Info"
          open={editVisible}
          onCancel={() => resetEditingHandler()}
          onOk={() => {
            setDataSource((prev) => {
              return prev.map((student) => {
                if (student.id === editStudent.id) {
                  return editStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditingHandler();
            message.success(
              `${editStudent.name}'s record has been updated successfully`
            );
          }}
          okText="Save"
        >
          <Input
            value={editStudent?.name}
            onChange={(e) => {
              setEditStudent((prev) => {
                return { ...prev, name: e.target.value };
              });
            }}
          ></Input>
          <Input
            value={editStudent?.email}
            onChange={(e) => {
              setEditStudent((prev) => {
                return { ...prev, email: e.target.value };
              });
            }}
          ></Input>
          <Input
            value={editStudent?.city}
            onChange={(e) => {
              setEditStudent((prev) => {
                return { ...prev, city: e.target.value };
              });
            }}
          ></Input>
        </Modal>
      </header>
    </div>
  );
};
export default App;
