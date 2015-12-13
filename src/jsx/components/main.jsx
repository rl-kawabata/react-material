import React from 'react'
import Navbar from './navbar'
import Container from './container'
import AppCanvas from 'material-ui/lib/app-canvas';

const Main = React.createClass({
  render: function() {
    return (
      <AppCanvas id='main'>
        <Navbar />
        <Container />
      </AppCanvas>
    );
  }
});

export default Main;
