import React from 'react';
import { Modal, List, Button } from 'antd-mobile';
import './index.scss';

function Footer() {
  return (
    <div className="footer">
      <Modal
        popup
        visible={this.state.modal2}
        onClose={this.onClose('modal2')}
        animationType="slide-up"
      >
        <List renderHeader={() => <div>委托买入</div>} className="popup-list">
          {['股票名称', '股票代码', '买入价格'].map(i => (
            <List.Item>{i}</List.Item>
          ))}
          <List.Item>
            <Button type="primary" onClick={this.onClose('modal2')}>
              买入
            </Button>
          </List.Item>
        </List>
      </Modal>
    </div>
  );
}

export default Footer;
