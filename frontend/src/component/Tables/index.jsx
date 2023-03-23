// import React, { Component } from "react";
// import { DatePicker, Space ,Table,Popconfirm,Button} from "antd";
// import locale from 'antd/es/date-picker/locale/zh_CN';
// import {
//   BrowserRouter as Router,
//   NavLink,
//   Route,
//   useRoutes,
//   Link,
//   Routes,
// } from "react-router-dom";
// export default class Tables extends Component {
//   render() {
//     const dataSource = [
//         {
//           key: '1',
//           name: '胡彦斌',
//           age: 32,
//           address: '西湖区湖底公园1号',
//         },
//         {
//           key: '2',
//           name: '胡彦祖',
//           age: 42,
//           address: '西湖区湖底公园1号',
//         },
//       ];
      
//       const columns = [
//         {
//           title: '时间',
//           dataIndex: 'name',
//           key: 'name',
//         },
//         {
//           title: '营业额',
//           dataIndex: 'age',
//           key: 'age',
//         },
//         {
//           title:"利润",
//           dataIndex:"profit",
//           key: "profit",
//         },
//         {
//           title:"保底营业额",
//           dataIndex:"minimumturnover",
//           key: "minimumturnover",
//         },
//         {
//           title:"营业额-保底营业额=盈亏",
//           dataIndex:"Profitst",
//           key: "Profitst",
//         },
//         {
//           title: '操作',
//           dataIndex: 'address',
//           key: 'address',
//           render: (_, record) =>
//           dataSource.length >= 1 ? (
//             <Popconfirm title="Sure to delete?" >
//               <a>Delete</a>
//             </Popconfirm>
//           ) : null,
//         },
//       ];
//     return (
//       <Space direction="vertical">
        
//         <div>
//         <DatePicker picker="month" locale={locale}/>
//         <Link to="/froms">添加</Link>
//         {/* <Button href="/forms">添加</Button> */}
//         </div>
        
//         <Table dataSource={dataSource} columns={columns} />;
//       </Space>
//     );
//   }
// }
