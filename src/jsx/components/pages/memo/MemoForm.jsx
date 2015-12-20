import React from 'react';
import MemoAction from '../../../actions/MemoAction'

const MemoForm = React.createClass({
  handleOnClick: function(e) {
    e.preventDefault();
    let testValue = ReactDOM.findDOMNode(this.refs.test_value).value.trim();
    MemoAction.create(testValue);
  },
  render: function() {
    return (
      <form>
        <input type="text" ref="test_value" />
        <button onClick={this.handleOnClick}>送信</button>
      </form>
    );
  }
});

export default MemoForm;
