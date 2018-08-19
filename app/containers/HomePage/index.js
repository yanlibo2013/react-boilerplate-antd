/*
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { compose } from 'redux';
import './index.scss';
import { isShowScrollBar } from '../App/actions';
export class HomePage extends React.PureComponent {
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
      <div className="home">
        <Helmet>
          <title>home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div className="page">
          <span>科达</span>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
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

export default compose(withConnect)(HomePage);
