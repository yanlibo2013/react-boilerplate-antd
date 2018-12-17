import React from 'react';
import { Icon } from 'antd-mobile';
import './index.scss';

/* eslint-disable react/prefer-stateless-function */
class Component extends React.Component {
  render() {
    return (
      <div className="head">
        <Icon type="left" size="lg" className="left-icon" />
        <span className="center">国民超级年金险</span>
        <Icon type="ellipsis" size="lg" className="right-icon" />
      </div>
    );
  }
}

export default Component;
