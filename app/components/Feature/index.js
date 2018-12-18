import React from 'react';
import './index.scss';

/* eslint-disable react/prefer-stateless-function */
class Component extends React.Component {
  render() {
    return (
      <div className="feature">
        <div className="title">
          <span>国民超级年金险</span>
          <div className="right">
            <img src="../../images/banner/Star.png" alt="" />
            已收藏
          </div>
        </div>
        <ul>
          <li>仅90天等待期，保障责任更全 小投入高杠</li>
          <li>仅90天等待期，保障责任更全 小投入高杠</li>
        </ul>
      </div>
    );
  }
}

export default Component;
