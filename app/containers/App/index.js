/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/Login/Loadable';
import MainPage from 'containers/MainPage/Loadable';

import LayoutPage from 'containers/Layout/Loadable';
import Flex from 'containers/Flex/Loadable';

const AppWrapper = styled.div`
  height: 100%;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={Flex} />
        <Route path="/login" component={LoginPage} />
        <Route path="/main" component={MainPage} />
        <Route path="/layout" component={LayoutPage} />
        <Route path="/flex" component={Flex} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}
