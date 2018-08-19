/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/Login/Loadable';
import MainPage from 'containers/MainPage/Loadable';

import LayoutPage from 'containers/Layout/Loadable';
import Flex from 'containers/Flex/Loadable';

import Spinner from 'components/LoadingIndicator/index';
import { makeSelectIsShowScroll } from './selectors';

export class Page extends React.PureComponent {
  componentDidMount() {}
  render() {
    const { isShowScroll } = this.props;
    const style = {
      height: isShowScroll ? 'auto' : '100%',
    };
    return (
      <div style={style}>
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
          <Route exact path="/" component={Flex} />
          <Route path="/login" component={LoginPage} />
          <Route path="/main" component={MainPage} />
          <Route path="/layout" component={LayoutPage} />
          <Route path="/flex" component={Flex} />
          <Route path="/spinner" component={Spinner} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

Page.propTypes = {
  isShowScroll: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isShowScroll: makeSelectIsShowScroll(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(Page);
