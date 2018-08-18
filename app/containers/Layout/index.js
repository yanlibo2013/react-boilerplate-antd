/*
 * LoginPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import { compose } from 'redux';
import './index.scss';

export class Page extends React.PureComponent {
  constructor() {
    super();
    this.Wrapper = React.createRef();
  }
  getScrollHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
    );
  }
  componentDidMount() {
    console.log(window.innerHeight);
    console.log(this.getScrollHeight());
    console.log(this.Wrapper);
  }
  getElementByI() {}
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
        <div className="wrapper" ref={this.Wrapper}>
          <div className="header">Header</div>
          <div className="container">
            <div className="aside">aside</div>
            <div className="content">
              <div className="page">
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
              </div>
            </div>
          </div>
          {/* <header className="header">Header</header>
          <aside className="aside aside-1">Aside 1</aside>
          <article className="main">
            <p>科达技术</p>
          </article> */}
        </div>
      </div>
    );
  }
}
Page.propTypes = {};

export default compose()(Page);
