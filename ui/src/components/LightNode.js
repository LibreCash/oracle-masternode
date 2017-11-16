import React, { Component } from 'react'
import PropTypes from "prop-types"

import { Button } from 'react-bootstrap'

import PriceChart from './PriceChart'

import { ticketsNetToChart, renderObjectProps } from '../utils'

import { nodeOp } from '../actions'

class LightNode extends Component {
  componentWillReceiveProps(nextProps) {

  }

  onStopClick() {
    const { dispatch } = this.context.store
    dispatch( nodeOp({ code: 'onoff', on: false }) )
  }

  render() {
    var node = this.props.node

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

    var fields = renderObjectProps(node, ['connected', 'options', 'tickets'])
    var fieldsOptions = renderObjectProps(node.options)

    // graph tickets

    var data = ticketsNetToChart(node.tickets)

    return (
      <div className="LightNode">
        
        <div className="LightNode-label0">LightNode-{node.id}</div>
        <div className="LightNode-connected"style={connected.style}>{connected.text}</div>

        {fields}
        {fieldsOptions}

        <Button bsStyle="danger" disabled={!node.connected} onClick={this.onStopClick.bind(this)}>Stop</Button>

        <PriceChart data={data} />
      </div>
    )
  }
}

LightNode.contextTypes = {
  store: PropTypes.object.isRequired
}

export default LightNode
