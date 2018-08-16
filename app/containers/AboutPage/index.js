/*
 * LoginPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from 'antd';

import { compose } from 'redux';
import './index.scss';

export class Page extends React.PureComponent {
  componentDidMount() {}
  render() {
    const { Content } = Layout;
    return (
      <div className="home">
        <Helmet>
          <title>about Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <Content className="content">abou</Content>
      </div>
    );
  }
}

Page.propTypes = {};

export default compose()(Page);
