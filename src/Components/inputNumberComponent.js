import React, { Component } from 'react';
import { Form, InputNumber } from 'antd';

class InputNumberComponent extends Component {
    render() {
        const { label, required, form, fieldName } = this.props, { getFieldDecorator } = form;
        return (
            <Form colon={false}>
                <Form.Item
                    label={label}
                    required={required}
                >
                    {getFieldDecorator(fieldName, {
                    })(<InputNumber min={0} />)}
                </Form.Item>
            </Form>
        );
    }
}

export default InputNumberComponent;
