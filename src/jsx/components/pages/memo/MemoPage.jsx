import React from 'react';
import ReactDOM from 'react-dom';
import {
  AppCanvas,
  RaisedButton,
  Dialog
} from 'material-ui';
import MemoAction from '../../../actions/MemoAction'
import Memo from './Memo'
import MemoList from './MemoList'
import MemoDialog from './MemoDialog'

/**
 * @params isOpenMemoDialog ダイアログ表示フラグ
 */
const states = {
  isOpenMemoDialog: false
}

/**
 * メモページ
 */
const MemoPage = React.createClass({
  getInitialState: function() {
    return states;
  },

  render: function() {
    return (
      <AppCanvas>
        <h1>メモ一覧</h1>
        <RaisedButton label="Standard Actions" onTouchTap={this._handleOnMemoTouchTap}/>
        <MemoDialog
          isOpen={this.state.isOpenMemoDialog}
          onSubmited={this._handleOnDialogSubmit}
          onCancelled={this._handleOnDialogCancel}/>
        <MemoList />
      </AppCanvas>
    );
  },

  _handleOnMemoTouchTap: function() {
    this.setState({ isOpenMemoDialog: true });
  },

  _handleOnDialogSubmit: function(memo) {
    MemoAction.create(memo);
    this.setState({ isOpenMemoDialog: false });
  },

  _handleOnDialogCancel: function() {
    this.setState({ isOpenMemoDialog: false });
  }
});

export default MemoPage;
