import React from 'react';
import PageWithNav from './page-with-nav';

const menuItems = [
  {route: '/home', text: 'ホーム'},
  {route: '/memo', text: 'メモ'}
];

const Sidemenu = React.createClass({
  render() {
    return (
      <PageWithNav location={this.props.location} menuItems={menuItems}>{this.props.children}</PageWithNav>
    );
  }
});

export default Sidemenu;
