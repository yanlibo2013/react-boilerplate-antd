/*
 * LoginPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Plan from 'components/List';

import { compose } from 'redux';
import './index.scss';

export class Page extends React.PureComponent {
  componentDidMount() {}
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
        <Header />
        <Plan />
        <Footer />
      </div>
    );
  }
}

export function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Page);
