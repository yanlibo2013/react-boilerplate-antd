/*
 * LoginPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from 'antd';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/Loadable';
import AboutPage from '../AboutPage/Loadable';

import './index.scss';

import Header from '../../components/Header/index';
import Sider from '../../components/Sider/index';

export class Page extends React.PureComponent {
  componentDidMount() {}
  render() {
    return (
      <div className="main">
        <Helmet>
          <title>main11111 Page</title>
          <meta name="description" content="main page423423" />
        </Helmet>
        <Layout className="layout">
          <Sider />
          <Layout className="content">
            <Header />
            <Switch>
              <Route exact path="/main" component={HomePage} />
              <Route path="/main/home" component={HomePage} />
              <Route path="/main/about" component={AboutPage} />
            </Switch>
          </Layout>
        </Layout>
      </div>
    );
  }
}

Page.propTypes = {};

export default compose()(Page);
