/*
 * LoginPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import { compose } from 'redux';
import './index.scss';

export class Page extends React.PureComponent {
  componentDidMount() {}
  render() {
    return (
      <div className="layout">
        <Helmet>
          <title>Layout Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div className="left" />
        <div className="right">
          <div className="top" />
          <div className="content">
            <div className="page" />
            {/* <div className="page" />
            <div className="page" />
            <div className="page" />
            <div className="page" />
            <div className="page" /> */}
          </div>
        </div>
      </div>
    );
  }
}
Page.propTypes = {};

export default compose()(Page);
