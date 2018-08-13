/*
 * LoginPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import { compose } from 'redux';
import './index.scss';

export class HomePage extends React.PureComponent {
  componentDidMount() {}
  render() {
    return (
      <div className="home">
        <Helmet>
          <title>home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <span>科达</span>
      </div>
    );
  }
}

HomePage.propTypes = {};

export default compose()(HomePage);
