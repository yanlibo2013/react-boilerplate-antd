/*
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { compose } from 'redux';
import './index.scss';
import { isShowScrollBar } from '../App/actions';

export class Page extends React.PureComponent {
  getScrollHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
    );
  }
  componentDidMount() {
    const data = window.innerHeight !== this.getScrollHeight();
    this.props.isShowScrollBar(data);
  }
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
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  isShowScrollBar: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    isShowScrollBar: val => {
      dispatch(isShowScrollBar(val));
    },
  };
}

// const mapStateToProps = createStructuredSelector({
//   repos: makeSelectRepos(),
//   username: makeSelectUsername(),
//   loading: makeSelectLoading(),
//   error: makeSelectError(),
// });

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Page);
