/*
 * Page
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import { compose } from 'redux';

export class Page extends React.PureComponent {
  // 首次实例化
  getDefaultProps() {}

  getInitialState() {}
  componentWillMount() {}

  render() {
    return (
      <div>
        <Helmet>
          <title> Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div />
      </div>
    );
  }
  componentDidMount() {}
  // 组件已存在时的状态改变
  componentWillReceiveProps() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  // 销毁&清理期
  componentWillUnmount() {}
}

Page.propTypes = {};

export default compose(
  null,
  null,
  null,
)(Page);
