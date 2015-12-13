import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav'

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
