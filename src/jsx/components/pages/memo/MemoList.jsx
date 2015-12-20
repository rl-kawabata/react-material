import React from 'react';
import ReactDOM from 'react-dom';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui';
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
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>名前</TableHeaderColumn>
            <TableHeaderColumn>本文</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {memos}
        </TableBody>
      </Table>
    )
  },

  _onChange: function() {
    let memos = MemoStore.getAll();
    this.setState({memos: MemoStore.getAll()});
  },

  _getMemoDom: function(memo) {
    return (
      <Memo name={memo.name} text={memo.text} id={memo.id} key={memo.id} />
    )
  }
});

export default MemoList;
