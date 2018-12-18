import React from 'react';
import { WhiteSpace } from 'antd-mobile';
import './index.scss';

/* eslint-disable react/prefer-stateless-function */
class Component extends React.Component {
  render() {
    return (
      <div>
        <div className="range">
          <span>保障年龄</span>
          <span>28天-55周岁</span>
        </div>
        <WhiteSpace size="lg" />
        <div className="range">
          <span>保障年龄</span>
          <span>28天-55周岁</span>
        </div>
        <WhiteSpace size="lg" />
        <div className="range">
          <span>保障年龄</span>
          <span>28天-55周岁</span>
        </div>
      </div>
    );
  }
}

export default Component;
