import React from 'react';
import { Dialog } from 'material-ui';

/**
 * メモダイアログ
 * @params isOpen 公開
 * @params onSubmited サブミット処理
 * @params onCancelled キャンセル処理
 */
const MemoDialog = React.createClass({
  render: function() {
    let isOpen = this.props.isOpen;
    let onSubmited = this.props.onSubmited;
    let onCancelled = this.props.onCancelled;
    let actions = [
      {text: 'キャンセル'},
      {text: '登録', onTouchTap: onSubmited, ref: 'submit'},
    ];
    return (
      <Dialog
        title="メモ登録"
        actions={actions}
        actionFocus="submit"
        open={isOpen}
        onRequestClose={onCancelled}>
        The actions in this window are created from the json that's passed in.
      </Dialog>
    );
  }
});

export default MemoDialog;
