import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Input } from 'antd';
// import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1890ff',
//     }}
//   />
// );

const onSearch = value => console.log(value);

ReactDOM.render(
  <>
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
  </>,
  document.getElementById('container'),
);

export default Search;
