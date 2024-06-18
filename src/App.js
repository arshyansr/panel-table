// app.js

import React from 'react';
import Table from './table'
import './App.css';

const data = [
  { name: 'danial', phone: '09225***642', last_seen: '2024/12/6', register: '2020/6/3' },
  { name: 'abas', phone: '0915***765', last_seen: '2024/10/9', register: '2003/5/7' },
  { name: 'mohamad', phone: '0901***642', last_seen: '2023/5/4', register: '2007/4/6' },
  { name: 'morteza', phone: '0903***654', last_seen: '2006/8/4', register: '2011/6/5' },
  { name: 'akbar', phone: '0934***634', last_seen: '2016/8/9', register: '2011/6/5' },
  { name: 'morteza', phone: '0903***654', last_seen: '2006/8/4', register: '2011/6/5' },
  { name: 'morteza', phone: '0903***654', last_seen: '2006/8/4', register: '2011/6/5' },
];

function App() {

  return (
    <div>
      <h1>members</h1>
      <Table data={data} />
    </div>
  );
}

export default App;
