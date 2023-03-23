import React, { Component } from "react";
import { Button, Checkbox, Form, Input, notification } from "antd";

import { ipcApiRoute } from "../../api/main";
export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
      turnover: "",
      profit: "",
      expenses: "",
    };
  }

  change = (e) => {
    this.setState({
      time: e.target.value,
    });
  };

  turnover = (e) => {
    this.setState({
      turnover: e.target.value,
    });
  };

  profit = (e) => {
    this.setState({
      profit: e.target.value,
    });
  };

  expenses = (e) => {
    this.setState({
      expenses: e.target.value,
    });
  };

  //返回按钮
  ts = () => {

    // ;
    window.history.back(-1);
  };

  //添加数据
  increase = (as) => {
    const params = {
      action: as,
      info: {
        time: this.state.time,
        turnover: this.state.turnover,
        profit: this.state.profit,
        expenses: this.state.expenses,
      },
    };
    this.$ipc.invoke(ipcApiRoute.sqlitedbOperation, params).then((res) => {
      // this.state.dataSource = res.result
      
    });

    window.history.back(-1);
  };

  render() {
    return (
      <Form
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      // autoComplete="off"
      >
        <Form.Item
          label="时间"
          name="时间	"
          rules={[{ required: true, message: "Please input your 时间	!" }]}
        >
          <Input value={this.setState.time} onChange={(e) => this.change(e)} />
        </Form.Item>
        <Form.Item
          label="营业额	"
          name="营业额	"
          rules={[{ required: true, message: "Please input your 营业额	!" }]}
        >
          <Input
            value={this.setState.turnover}
            onChange={(e) => this.turnover(e)}
          />
        </Form.Item>

        <Form.Item
          label="利润"
          name="利润	"
          rules={[{ required: true, message: "Please input your 利润	!" }]}
        >
          <Input
            value={this.setState.profit}
            onChange={(e) => this.profit(e)}
          />
        </Form.Item>

        <Form.Item
          label="花销"
          name="花销"
          rules={[{ required: true, message: "Please input your 花销	!" }]}
        >
          <Input
            value={this.setState.expenses}
            onChange={(e) => this.expenses(e)}
          />
        </Form.Item>
        <Button onClick={() => this.ts()}>返回</Button>
        <Button onClick={() => this.increase("add")}>添加</Button>
      </Form>
    );
  }
}
