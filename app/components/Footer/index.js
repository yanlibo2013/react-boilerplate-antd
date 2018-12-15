import React from 'react';
// import PropTypes from 'prop-types';
import { Button } from 'antd-mobile';
import './index.scss';

export class Footer extends React.Component {
  componentDidMount() {}
  showModal() {}
  render() {
    return (
      <div className="footer">
        <Button type="primary" size="small" className="btn">
          立即投保
        </Button>
      </div>
    );
  }
}

Footer.propTypes = {
  // modal: PropTypes.Bool
};

export default Footer;
