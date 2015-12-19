import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

const Navbar = React.createClass({
  _handleMenuTouch() {
    console.log('test');
  },
  render() {
    return (
      <AppBar
      title="勤怠管理アプリ"
      onLeftIconButtonTouchTap={this._handleMenuTouch} />
    );
  }
});

export default Navbar;
