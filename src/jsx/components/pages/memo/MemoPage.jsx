import React from 'react';
import ReactDOM from 'react-dom';
import {
  AppCanvas,
  RaisedButton,
  Dialog
} from 'material-ui';
import Memo from './Memo'
import MemoList from './MemoList'
import MemoForm from './MemoForm'
import MemoDialog from './MemoDialog'

/**
 * @params isOpenMemoDialog ダイアログ表示フラグ
 */
const state = {
  isOpenMemoDialog: false
}

/**
 * メモページ
 */
const MemoPage = React.createClass({
  getInitialState: function() {
    return state;
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
        <MemoForm />
      </AppCanvas>
    );
  },

  _handleOnMemoTouchTap: function() {
    this.setState({ isOpenMemoDialog: true });
  },

  _handleOnDialogSubmit: function() {
    this.setState({ isOpenMemoDialog: false });
  },

  _handleOnDialogCancel: function() {
    this.setState({ isOpenMemoDialog: false });
  }
});

export default MemoPage;
