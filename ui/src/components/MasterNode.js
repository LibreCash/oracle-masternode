import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Button, Label, Grid, Row, Col } from 'react-bootstrap'

import PriceChart from './PriceChart'
import LightNode from './LightNode'

import { ticketsNetToChart, renderObjectProps } from '../utils'

import { masterOn } from '../actions'

class MasterNode extends Component {
  constructor(props, context) {
    super()
    console.log(context)
  }
  componentWillReceiveProps(nextProps) {

  }

  onStopClick() {
    const { dispatch } = this.context.store
    dispatch( masterOn('off') )
  }

  onStartClick() {
    const { dispatch } = this.context.store
    dispatch( masterOn('on') )
  }

  onShutdownClick() {
    const { dispatch } = this.context.store
    dispatch( masterOn('shutdown') )
  }

  render() {
    var ctx = this.props.ctx
    var connected = ctx.connected ? {
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

    var fields = renderObjectProps(ctx.master.state)

    if (ctx.connected) {
      var lightNodes = []
      for (let node of ctx.lightNodes) {
        lightNodes.push(<LightNode node={node}></LightNode>)
      }
    }

    var data = ticketsNetToChart([])

    var notifications = []
    for (var notification in ctx.notifications) {
      notifications.push(
        <Row>
          JSON.strigify(notification)
        </Row>)
    }

    return (
      <div className="MasterNode">
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <div className="MasterNode-label0">Master-{ctx.master.id}</div>
              <div className="MasterNode-connected"style={connected.style}>{connected.text}</div>
            </Col>
            <Col xs={6} md={4}>
              <Button className="MasterNode-button-shutdown pull-right" bsStyle="danger" disabled={!this.props.ctx.connected} onClick={this.onShutdownClick.bind(this)}>Shutdown</Button>
              {ctx.master.state.running ? 
                  <Button className="MasterNode-button-stop pull-right" bsStyle="warning" disabled={!this.props.ctx.connected} onClick={this.onStopClick.bind(this)}>Stop</Button>
                :
                  <Button className="MasterNode-button-start pull-right" bsStyle="success" disabled={!this.props.ctx.connected} onClick={this.onStartClick.bind(this)}>Start</Button>
              }
            </Col>
          </Row>
          <Row>
            <h4>Notifications</h4>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              {fields}
            </Col>
            <Col xs={6} md={4}>
              <Grid>
                {notifications}
              </Grid>
            </Col>
          </Row>
        </Grid>

        {lightNodes}

        <PriceChart data={data} />
      </div>
    )
  }
}

MasterNode.contextTypes = {
  store: PropTypes.object.isRequired
}

export default MasterNode;
