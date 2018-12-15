/*
 * LoginPage
 *
 */

import React from 'react';
import { Button } from 'antd-mobile';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { compose } from 'redux';
import './index.scss';

export class Page extends React.PureComponent {
  componentDidMount() {}
  render() {
    return (
      <div className="about">
        <Helmet>
          <title>login mobile Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div className="page">
          {/* <span>login mobile</span> */}
          <Button type="primary" className="btn">
            primary
          </Button>
        </div>
      </div>
    );
  }
}

Page.propTypes = {};

// const mapStateToProps = createStructuredSelector({
//   repos: makeSelectRepos(),
//   username: makeSelectUsername(),
//   loading: makeSelectLoading(),
//   error: makeSelectError(),
// });

const withConnect = connect(
  null,
  null,
);

export default compose(withConnect)(Page);
