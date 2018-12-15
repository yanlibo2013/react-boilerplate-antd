import React from 'react';
import { Button, Modal } from 'antd-mobile';
import './index.scss';

export class Footer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal2: false,
    };
  }
  componentDidMount() {}
  showModal(key) {
    // e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      modal2: key,
    });
  }
  onClose(key) {
    this.setState({
      modal2: key,
    });
  }
  render() {
    return (
      <div className="footer">
        <Button
          type="primary"
          size="small"
          className="btn"
          onClick={() => this.showModal(!this.state.modal2)}
        >
          立即投保
        </Button>
        <Modal
          popup
          visible={this.state.modal2}
          animationType="slide-up"
          onClose={() => this.onClose(false)}
        >
          <div style={{ height: 100, overflow: 'scroll' }}>
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
          </div>
        </Modal>
      </div>
    );
  }
}

Footer.propTypes = {
  // modal: PropTypes.Bool
};

export default Footer;
