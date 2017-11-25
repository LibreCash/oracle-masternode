import React, { Component } from 'react'
import PropTypes from "prop-types"

import { Button, Label, Grid, Row, Col, Table } from 'react-bootstrap'

import PriceChart from './PriceChart'

import { tickersNetToChart, renderObjectProps } from '../utils'

import { nodeOp } from '../actions'

class LightNode extends Component {
  componentWillReceiveProps(nextProps) {

  }

  onStopClick() {
    const { dispatch } = this.context.store
    dispatch( nodeOp({ code: 'onoff', cmd: 'off', id: this.props.node.id }) )
  }

  onStartClick() {
    const { dispatch } = this.context.store
    dispatch( nodeOp({ code: 'onoff', cmd: 'on', id: this.props.node.id }) )
  }

  onShutdownClick() {
    const { dispatch } = this.context.store
    dispatch( nodeOp({ code: 'onoff', cmd: 'shutdown', id: this.props.node.id }) )
  }

  onApplyCommand() {
    const { dispatch } = this.context.store
    dispatch( nodeOp({ code: 'simulate', cmd: 'testRandomPrice', id: this.props.node.id }) )
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

    var fields = renderObjectProps(node, ['connected', 'options', 'tickers'])
    var fieldsOptions = renderObjectProps(node.options)

    // graph tickets

    var data = tickersNetToChart(node.tickers)

    var notifications = Notifications()

    return (
      <div className="LightNode">
        <Grid>
          <Row>
            <Col xs={6} md={6}>
              <div className="LightNode-label0">LightNode {node.id}</div>
              <div className="LightNode-connected"style={connected.style}>{connected.text}</div>
            </Col>
            <Col xs={6} md={2}>
              <Button className="pull-left" bsStyle="success" disabled={!node.connected} onClick={this.onApplyCommand.bind(this)}>Apply</Button>
            </Col>
            <Col xs={6} md={4}>
              <Button className="LightNode-button-shutdown pull-right" bsStyle="danger" disabled={!node.connected} onClick={this.onShutdownClick.bind(this)}>Shutdown</Button>
              {true ? 
                  <Button className="LightNode-button-stop pull-right" bsStyle="warning" disabled={!node.connected} onClick={this.onStopClick.bind(this)}>Stop</Button>
                :
                  <Button className="LightNode-button-start pull-right" bsStyle="success" disabled={!node.connected} onClick={this.onStartClick.bind(this)}>Start</Button>
              }
            </Col>
          </Row>
          <Row>
            {fields}
            {fieldsOptions}
          </Row>
        </Grid>

        <PriceChart data={data} />

        {notifications}
      </div>
    )
  }
}

LightNode.contextTypes = {
  store: PropTypes.object.isRequired
}

export default LightNode
