import React from 'react';
import ReactDOM from 'react-dom';
import Dispatcher from 'flux/lib/Dispatcher';
import AppCanvas from 'material-ui/lib/app-canvas';
import MemoAction from '../../actions/MemoAction'
import MemoStore from '../../stores/MemoStore'

const MemoList = React.createClass({
  getInitialState: function() {
    MemoAction.loadMemo();
    return { memos: [] }
  },
  componentDidMount: function() {
    let self = this;
    MemoStore.onChangeListener(this._onChange);
  },
  render: function() {
    let memos = this.state.memos.map(function(memo) {
      return (
        <Memos name={memo.name} text={memo.text} key={memo.id} />
      )
    });
    return (
      <div>
        {memos}
      </div>
    )
  },
  _onChange: function() {
    this.setState({memos: MemoStore.getAll()});
  }
});

const Memos = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
});

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

const Memo = React.createClass({
  render: function() {
    return (
      <AppCanvas>
        <MemoList />
        <MemoForm />
      </AppCanvas>
    );
  }
});

export default Memo;
