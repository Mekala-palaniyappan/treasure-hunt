import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../redux/User/actions';
import { Button, Form } from 'antd';
import InputNumberComponent from './inputNumberComponent';
import TreasureSet from './treasureSet';
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row: 3,
      column: 3,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const { row, column } = values;
      this.setState({
        row,
        column,
      });
    });
  };

  render() {
    const { form } = this.props,
      { row, column } = this.state;
    return (
      <div className={'container'}>
        <Form {...formItemLayout} colon={true} onSubmit={this.handleSubmit}>
          <InputNumberComponent
            form={form}
            label={'Enter the number of Rows in grid'}
            required={true}
            fieldName={'row'}
          />
          <InputNumberComponent
            form={form}
            label={'Enter the number of Columns in grid'}
            required={true}
            fieldName={'column'}
          />
          <Button htmlType={'submit'}>Create</Button>
        </Form>
        <div className={'treasure-set'}>
          <h4>Enter the treasures :</h4>
          <TreasureSet row={row} column={column} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, actions)(Form.create()(App));
