/*
 * LoginPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
// import Img from 'components/Login/Img';
import P from 'components/Login/P';
// import Form from 'components/Login/Form';

// import BgImag from 'images/login/login_bg.jpg';

import { compose } from 'redux';

const Article = styled.article`
  display: flex;
  justify-content: center;
`;

export class LoginPage extends React.PureComponent {
  componentDidMount() {}
  render() {
    return (
      <Article>
        <Helmet>
          <title>Login Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <P>智能广告投放系统111 V1.0</P>
        {/* <Form />
        <Img src={BgImag} alt="react-boilerplate - Logo" /> */}
      </Article>
    );
  }
}

LoginPage.propTypes = {};

export default compose()(LoginPage);
