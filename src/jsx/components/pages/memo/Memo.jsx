import React from 'react';
import {
  TableRow,
  TableRowColumn
} from 'material-ui';

const Memo = React.createClass({
  render: function() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.id}</TableRowColumn>
        <TableRowColumn>{this.props.name}</TableRowColumn>
        <TableRowColumn>{this.props.text}</TableRowColumn>
      </TableRow>
    );
  }
});

export default Memo;
