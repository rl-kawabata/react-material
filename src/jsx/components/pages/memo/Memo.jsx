import React from 'react';

const Memo = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
});

export default Memo;
