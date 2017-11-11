import React, { Component } from 'react';

import { Button } from 'react-bootstrap';

import { nodeOp } from '../actions'

class LightNode extends Component {
  componentWillReceiveProps(nextProps) {

  }

  onStopClick() {
    nodeOp({
      code: 'onoff',
      on: false 
    })
  }

  render() {
    var node = this.props.node;

    var connected = node.connected ? {
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
    for (let [k, field] of Object.entries(node)) {
      console.log(field)
      if (k != 'connected' && k != 'options')
        fields.push(<div className=".MasterNode-label1">{k + ': ' + JSON.stringify(field)}</div>)
    }
    for (let [k, field] of Object.entries(node.options)) {
      console.log(field)
      fields.push(<div className=".MasterNode-label1">{k + ': ' + JSON.stringify(field)}</div>)
    }

//disabled="{node.connected ? 'true' : 'false'}
    //var prop = ['disabled']{...prop}

    return (
      <div className="LightNode">
        
        <div className="LightNode-label0">LightNode-{node.id}</div>
        <div className="LightNode-connected"style={connected.style}>{connected.text}</div>

        {fields}

        <Button bsStyle="danger" disabled={!node.connected} onClick={this.onStopClick}>Stop</Button>
      </div>
    );
  }
}

export default LightNode;
