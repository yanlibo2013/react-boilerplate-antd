/*
 * HomePage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Header from 'components/Header';
import Banner from 'components/Banner';
import Feature from 'components/Feature';
import Range from 'components/Range';
import Form from 'components/Form';
import { WhiteSpace } from 'antd-mobile';
import { compose } from 'redux';
import './index.scss';
export class HomePage extends React.PureComponent {
  componentDidMount() {}

  clickItem(val) {
    const { id } = val.id;
    const path = `/repos/${id}`;
    this.router.push(path);
  }
  render() {
    return (
      <div className="home">
        <Helmet>
          <title>home </title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div className="home">
          <Header />
          <Banner />
          <Feature />
          <Form />
          <WhiteSpace size="xl" />
          <Range />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {};

export function mapDispatchToProps() {
  return {};
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
