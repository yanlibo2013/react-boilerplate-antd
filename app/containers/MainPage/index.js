/*
 * LoginPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/Loadable';
import AboutPage from '../AboutPage/Loadable';

import './index.scss';

export class Page extends React.PureComponent {
  constructor() {
    super();
    this.Wrapper = React.createRef();
  }

  componentDidMount() {
    // console.log(window.innerHeight);
    // console.log(this.getScrollHeight());
    //  console.log(this.Wrapper);
  }
  render() {
    return (
      <div className="main">
        <Helmet>
          <title>main11111 Page</title>
          <meta name="description" content="main page423423" />
        </Helmet>
        <div className="wrapper" ref={this.Wrapper}>
          <div className="header">Header1</div>
          <div className="container">
            <div className="aside">aside</div>
            <div className="content">
              <Switch>
                <Route exact path="/main" component={HomePage} />
                <Route path="/main/home" component={HomePage} />
                <Route path="/main/about" component={AboutPage} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Page.propTypes = {};

export default compose()(Page);
