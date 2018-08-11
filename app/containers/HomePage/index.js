/*
 * LoginPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from 'antd';

import { compose } from 'redux';
import './index.scss';

import Header from '../../components/Header/index';

export class HomePage extends React.PureComponent {
  componentDidMount() {}
  render() {
    const { Content, Sider } = Layout;
    return (
      <div className="home">
        <Helmet>
          <title>home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <Layout className="layout">
          <Sider className="sider">Sider</Sider>
          <Layout>
            <Header className="header">
              <span>权限管理</span>
            </Header>
            <Content className="content">Content</Content>
            {/* <Footer className="footer">Footer</Footer> */}
          </Layout>
        </Layout>
      </div>
    );
  }
}

HomePage.propTypes = {};

export default compose()(HomePage);
