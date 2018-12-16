/*
 * HomePage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Grid } from 'antd-mobile';

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
    const data = Array.from(new Array(9)).map((_val, i) => ({
      icon:
        'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `Grid${i}`,
      id: i,
    }));
    return (
      <div className="home">
        <Helmet>
          <title>home </title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div className="page">
          <Grid
            data={data}
            columnNum={3}
            itemStyle={{ height: '150px', background: 'rgba(0,0,0,.05)' }}
            onClick={val => {
              this.clickItem(val);
            }}
          />
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
