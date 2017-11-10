import React, { Component } from 'react';

import MasterNode from './MasterNode';

import { Button } from 'react-bootstrap';


class Main extends Component {
  componentWillReceiveProps(nextProps) {

  }
  render() {
    var ctx = this.props.ctx;
    return (
      <div className="Main">
        <Button bsStyle="info">INFO</Button>
        <MasterNode ctx={ this.props.ctx }></MasterNode>
      </div>
    );
  }
}

export default Main;
