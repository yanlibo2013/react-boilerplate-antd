import React from 'react';
import { Layout } from 'antd';
import './index.scss';
import left from '../../images/header/logo.png';
import right from '../../images/home/header-right.png';
const { Sider } = Layout;

/* eslint-disable react/prefer-stateless-function */
class Component extends React.Component {
  render() {
    return (
      <Sider className="sider">
        <div>
          <img src={left} alt="" />
          <img src={right} alt="" />
        </div>
      </Sider>
    );
  }
}

export default Component;
