import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Button, Label, Grid, Row, Col, Table, Tabs, Tab } from 'react-bootstrap'

import PriceChart from './PriceChart'
import LightNode from './LightNode'
import Notifications from './Notifications'
import NodesView from './NodesView'
import ActionsHistory from './ActionsHistory'
import PricesView from './PricesView'


import { tickersNetToChart, renderObjectProps } from '../utils'

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

  onTabClick() {
    console.log('tab')
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

    if (!ctx.master.state)
      return <div>ctx.master.state is null</div>

    var fields = renderObjectProps(ctx.master.state, 'lastPrices')

    var lightNodes = []

    if (ctx.connected) {
      var i = 0
      for (let node of ctx.lightNodes) {
        var notifications = ctx.lightNodesNotifications[node.id]
        lightNodes.push(<Tab eventKey={3+i} title={"Lightnode "+node.id}><LightNode node={node} notifications={notifications}></LightNode></Tab>)
        i += 1
      }
    }

    var data = tickersNetToChart([])

    var actions = [
      {id: 1, name: 'Login Success', ip: '127.0.0.1', user: 'default', date: new Date()},
      {id: 2, name: 'Login Fail', ip: '127.0.0.1', user: 'hack@r', date: new Date()}
    ]

    var lastPrices = ctx.master.state.lastPrices || []

    return (
      <div className="MasterNode">
        <Tabs defaultActiveKey={1} id="MasterNode-tabs" onClick={this.onTabClick.bind(this)}>
          <Tab eventKey={1} title="Main">
            <Grid>
              <Row>
                <Col xs={6} md={6}>
                  <div className="MasterNode-label0">Master {ctx.master.state.id == -1 ? '?' : ctx.master.state.id}</div>
                  <div className="MasterNode-connected"style={connected.style}>{connected.text}</div>
                </Col>
                <Col xs={6} md={6}>
                  <Button className="MasterNode-button-shutdown pull-right" bsStyle="danger" disabled={!this.props.ctx.connected} onClick={this.onShutdownClick.bind(this)}>Shutdown</Button>
                  {ctx.master.state.running ? 
                      <Button className="MasterNode-button-stop pull-right" bsStyle="warning" disabled={!this.props.ctx.connected} onClick={this.onStopClick.bind(this)}>Stop</Button>
                    :
                      <Button className="MasterNode-button-start pull-right" bsStyle="success" disabled={!this.props.ctx.connected} onClick={this.onStartClick.bind(this)}>Start</Button>
                  }
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6}>
                  {fields}
                </Col>
                <Col xs={6} md={6}>
                  <Grid>
                  </Grid>
                </Col>
              </Row>
              <Row>
                <h3>Last Prices</h3>
                <PricesView prices={lastPrices} />
              </Row>
              <Row>
                <h3>Notifications</h3>
                <Notifications notifications={ctx.master.notifications} />
              </Row>
              <Row>
                <PriceChart data={data} />
              </Row>
              <Row>
                <h3>Audit Actions</h3>
                <ActionsHistory actions={actions} />
              </Row>
            </Grid>

          </Tab>
          <Tab eventKey={2} title="Nodes">
            <NodesView master={ctx.master}>
            </NodesView>
          </Tab>
          
          {lightNodes}

        </Tabs>

      </div>
    )
  }
}

MasterNode.contextTypes = {
  store: PropTypes.object.isRequired
}

export default MasterNode;
