/*
 * LoginPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from 'antd';

import { compose } from 'redux';
import './index.scss';

export class HomePage extends React.PureComponent {
  componentDidMount() {}
  render() {
    const { Content } = Layout;
    return (
      <div className="home">
        <Helmet>
          <title>home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <Content className="content">home</Content>
      </div>
    );
  }
}

HomePage.propTypes = {};

export default compose()(HomePage);
