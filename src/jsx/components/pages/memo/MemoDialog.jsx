import React from 'react';
import { Dialog, TextField } from 'material-ui';

/**
 * メモダイアログ
 * @params isOpen 公開
 * @params onSubmited サブミット処理
 * @params onCancelled キャンセル処理
 */
const MemoDialog = React.createClass({
  render: function() {
    let actions = [
      {text: 'キャンセル'},
      {text: '登録', onTouchTap: this._handleOnTouchTap, ref: 'submit'},
    ];
    return (
      <Dialog
        title="メモ登録"
        actions={actions}
        actionFocus="submit"
        open={this.props.isOpen}
        onRequestClose={this.props.onCancelled}>
        <TextField ref="name" hintText="名前" /><br/>
        <TextField ref="text" hintText="本文" multiLine={true} />
      </Dialog>
    );
  },

  _handleOnTouchTap: function() {
    let memo = {
      name: this.refs.name.getValue(),
      text: this.refs.name.getValue()
    }
    this.props.onSubmited(memo);
  }
});

export default MemoDialog;
