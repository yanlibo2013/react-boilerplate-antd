import React from 'react';
import PropTypes from 'prop-types';

import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

class BasicInput extends React.Component {
  // state = {
  //   value: 1,
  // };
  onSubmit = () => {
    this.props.form.validateFields({ force: true }, error => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
      } else {
        alert('Validation failed');
      }
    });
  };
  onReset = () => {
    this.props.form.resetFields();
  };
  validateAccount = (rule, value, callback) => {
    if (value && value.length > 4) {
      callback();
    } else {
      callback(new Error('At least four characters for account'));
    }
  };
  render() {
    const { getFieldProps, getFieldError } = this.props.form;

    return (
      <form>
        <List
          renderHeader={() => 'Form Validation'}
          renderFooter={() =>
            getFieldError('account') && getFieldError('account').join(',')
          }
        >
          <InputItem
            {...getFieldProps('account', {
              // initialValue: 'little ant',
              rules: [
                { required: true, message: 'Please input account' },
                { validator: this.validateAccount },
              ],
            })}
            clear
            error={!!getFieldError('account')}
            onErrorClick={() => {
              alert(getFieldError('account').join('、'));
            }}
            placeholder="please input account"
          >
            Account
          </InputItem>
          <InputItem
            {...getFieldProps('password')}
            placeholder="please input password"
            type="password"
          >
            Password
          </InputItem>
        </List>
      </form>
    );
  }
}

BasicInput.propTypes = {
  validateFields: PropTypes.func,
  form: PropTypes.object,
};

const BasicInputWrapper = createForm()(BasicInput);
export default BasicInputWrapper;
