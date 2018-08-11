import React from 'react';
import { Layout } from 'antd';
import './index.scss';
const { Header } = Layout;

/* eslint-disable react/prefer-stateless-function */
class Component extends React.Component {
  render() {
    return <Header className="header" />;
  }
}

export default Component;
