import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './index.scss';

/* eslint-disable react/prefer-stateless-function */
class Component extends React.Component {
  render() {
    return (
      <NavBar
        mode="dark"
        leftContent="Back"
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >
        NavBar
      </NavBar>
    );
  }
}

export default Component;
