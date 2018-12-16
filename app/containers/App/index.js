/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';

export class Page extends React.PureComponent {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about/:id" component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

Page.propTypes = {};

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(Page);
