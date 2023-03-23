import React, { Component } from "react";
import { DatePicker, Space, Table, Popconfirm, Button } from "antd";
import locale from "antd/es/date-picker/locale/zh_CN";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  useRoutes,
  Link,
  Routes,
} from "react-router-dom";
import { ipcApiRoute } from "../../api/main";
import { v4 as uuidv4 } from "uuid";

export default class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  all_lists = (all_list) => {
    all_list.forEach((item, index) => {
      item.key = uuidv4().substring(0, 8);
      const my = item.turnover - 2000;
      item.profitst = my;
      
    });

    this.setState({
      dataSource: all_list,
    });
  };

  //挂载阶段
  componentDidMount() {
    //查找数据
    const params = {
      action: "all",
    };
    this.$ipc.invoke(ipcApiRoute.sqlitedbOperation, params).then((res) => {
      this.all_lists(res.all_list);
    });
  }

  //删除数据
  handleSearch = (id) => {
    console.log(id);
    const params = {
      action: "del",
      delete_id: id,
    };
    this.$ipc.invoke(ipcApiRoute.sqlitedbOperation, params).then((res) => {
      this.all_lists(res.all_list);
    });
  };

  componentWillUnmount() {}

  render() {
    // const dataSource = [
    //   {
    //     key: "1",
    //     name: "胡彦斌",
    //     age: 32,
    //     address: "西湖区湖底公园1号",
    //   },
    //   {
    //     key: "2",
    //     name: "胡彦祖",
    //     age: 42,
    //     address: "西湖区湖底公园1号",
    //   },
    // ];

    const columns = [
      {
        title: "时间",
        dataIndex: "time",
        key: "time",
      },
      {
        title: "营业额",
        dataIndex: "turnover",
        key: "turnover",
      },
      {
        title: "利润",
        dataIndex: "profit",
        key: "profit",
      },
      {
        title: "花销",
        dataIndex: "expenses",
        key: "expenses",
      },
      {
        title: "保底营业额",
        dataIndex: "minimumturnover",
        key: "minimumturnover",
        render: (_, record) => <p>2000</p>,
      },
      {
        title: "营业额-保底营业额=盈亏",
        dataIndex: "profitst",
        key: "profitst",
      },
      {
        title: "操作",
        dataIndex: "address",
        key: "address",
        render: (_, record) => (
          <Space size="middle">
            <Popconfirm
              title="是否彻底删除?"
              onConfirm={() => this.handleSearch(record.id)}
            >
              <Button>Delete</Button>
            </Popconfirm>
          </Space>
        ),
      },
    ];

    const onChange = (date, dateString) => {
      console.log(dateString);
    };
    return (
      <Space direction="vertical">
        <div>
          <DatePicker onChange={onChange} picker="month" locale={locale} />
          <Link to="/forms">
            <Button href="/forms">添加</Button>
          </Link>
        </div>
        <Table dataSource={this.state.dataSource} columns={columns} bordered />;
      </Space>
    );
  }
}
