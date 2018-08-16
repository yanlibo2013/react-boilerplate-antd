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
      <div className="flex">
        <Helmet>
          <title>Layout Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div className="wrapper">
          <header className="header">Header</header>
          <article className="main">
            <p>科达技术</p>
          </article>
          <aside className="aside aside-1">Aside 1</aside>
          <aside className="aside aside-2">Aside 2</aside>
          <footer className="footer">Footer</footer>
        </div>
      </div>
    );
  }
}
Page.propTypes = {};

export default compose()(Page);
