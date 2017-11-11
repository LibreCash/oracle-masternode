import React, { Component } from 'react';

import LightNode from './LightNode';

import { Button } from 'react-bootstrap';

import { masterOn } from '../actions'

class MasterNode extends Component {
  componentWillReceiveProps(nextProps) {

  }

  onStopClick() {
    masterOn({ on: false })
  }

  render() {
    var connected = this.props.ctx.connected ? {
      style: {
        color: 'green',
      },
      text: 'Connected'
    } : {
      style: {
        color: 'gray',
      },
      text: 'Offline'
    }

    var fields = []
    for (let [k, field] of Object.entries(this.props.ctx.master)) {
      fields.push(<div className=".MasterNode-label1">{k + ': ' + field}</div>)
    }

    var lightNodes = []
    for (let node of this.props.ctx.lightNodes) {
      lightNodes.push(<LightNode node={node}></LightNode>)
    }

    return (
      <div className="MasterNode">
        <div className="MasterNode-label0">Master-{this.props.ctx.master.id}</div>
        <div className="MasterNode-connected"style={connected.style}>{connected.text}</div>
        
        {fields}

        <Button bsStyle="danger" disabled={!this.props.ctx.connected} onClick={this.onStopClick}>Stop</Button>
        {lightNodes}
      </div>
    );
  }
}

export default MasterNode;
