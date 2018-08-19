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
      <div className="about">
        <Helmet>
          <title>about Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div className="page">
          <span>about</span>
        </div>
      </div>
    );
  }
}

Page.propTypes = {};

export default compose()(Page);
