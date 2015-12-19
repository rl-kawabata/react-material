import React from 'react';
import {AppCanvas} from 'material-ui';
import Navbar from './navbar';

const Master = React.createClass({
  render() {
    return (
      <AppCanvas>
        <Navbar />
        {this.props.children}
      </AppCanvas>
    );
  }
});

export default Master;
