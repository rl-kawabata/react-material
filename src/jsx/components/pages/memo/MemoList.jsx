import React from 'react';
import ReactDOM from 'react-dom';
import MemoAction from '../../../actions/MemoAction'
import MemoStore from '../../../stores/MemoStore'
import Memo from './Memo'

const states = {
  memos: []
}

const MemoList = React.createClass({
  getInitialState: function() {
    MemoAction.loadMemo();
    return states;
  },

  componentDidMount: function() {
    MemoStore.onChangeListener(this._onChange);
  },

  render: function() {
    let memos = this.state.memos.map(this._getMemoDom);
    return (
      <div>
        {memos}
      </div>
    )
  },

  _onChange: function() {
    let memos = MemoStore.getAll();
    this.setState({memos: MemoStore.getAll()});
  },

  _getMemoDom: function(memo) {
    return (
      <Memo name={memo.name} text={memo.text} key={memo.id} />
    )
  }
});

export default MemoList;
