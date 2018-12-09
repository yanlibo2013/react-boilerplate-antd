/*
 * LoginPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import Img from 'components/Login/Img';
// import P from 'components/Login/P';
// import { upperCase } from 'lodash';
// import Form from 'components/Login/Form';
import { compose } from 'redux';
import './index.scss';

export class LoginPage extends React.PureComponent {
  componentDidMount() {}
  render() {
    return (
      <div className="login">
        <Helmet>
          <title>Login Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        {/* <P>{upperCase('react')}</P> */}
        {/* <Form /> */}
      </div>
    );
  }
}

LoginPage.propTypes = {};

export default compose()(LoginPage);
