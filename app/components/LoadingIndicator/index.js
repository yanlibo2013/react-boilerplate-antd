import React from 'react';

import './index.scss';

// import Spinner from 'react-spinki';

const Spinner = require('react-spinkit');

const LoadingIndicator = () => (
  // <ReactLoading type="bars" height="900px" width="64px" />
  <div className="spinner">
    <Spinner name="line-scale" color="#fff" className="box" />
  </div>
);

export default LoadingIndicator;

// 参考 https://github.com/KyleAMathews/react-spinkit
