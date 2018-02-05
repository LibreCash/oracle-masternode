// EthView

import React, { Component } from 'react'
import PropTypes from "prop-types"

import { Panel, Button, Label, Grid, Row, Col, Table } from 'react-bootstrap'

import { renderObjectProps } from '../utils'

// ETHEREUM
// CLIENTS
//  - client 
//      infura
//      web3
// STATUS
//  props
// EVENT
//  eth
//  details (expandable)
// CLIENT
//  Connected
//  Active
//  LastPrice
//  LastUpdate

class EthStatus extends Component {
  render() {
    var status = this.props.status;
    var fields = renderObjectProps(status);

    return (
      <div>
        {fields}
      </div>
    )
  }
}

class EthViewEvents extends Component {
  render() {
    var events = []
    this.props.events.forEach((event) => {
      events.push(
        <tr>
          <td>{event[0]}</td>
          <td>{JSON.stringify(event.length > 1 ? event.slice(1) : null)}</td>
        </tr>
      )
    })

    return (
      <Table id="tableEthViewEvents" className="EthViewEventsTable" striped bordered condensed hover>
        <thead>
          <tr>
            <th>Eth</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {events}
        </tbody>
      </Table>
    )
  }
}

class EthViewClients extends Component {
  render() {

    var clients = []
    this.props.clients.forEach((client) => {
      clients.push(
        <tr>
          <td>{client.name}</td>
          <td>{client.url}</td>
          <td>{JSON.stringify(client.connected)}</td>
          <td>{JSON.stringify(client.active)}</td>
          <td>{client.lastPrice}</td>
          <td>{client.lastUpdate}</td>
        </tr>
      )
    })

    return (
      <Table id="tableEthViewClients" className="EthViewClientsTable" striped bordered condensed hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Url</th>
            <th>Connected</th>
            <th>Active</th>
            <th>LastPrice</th>
            <th>LastUpdate</th>
          </tr>
        </thead>
        <tbody>
          {clients}
        </tbody>
      </Table>
    )
  }
}

class EthView extends Component {
	
  render() {
    var eth = this.props.eth;

    return (
      <div className="EthView">
        <Panel>
          <h5>Ethereum Status</h5>
          <EthStatus status={(eth && eth.status) || []} />
        </Panel>
        <Panel>
            <h5>Ethereum Events</h5>
            <EthViewEvents events={eth ? eth.events : []} />
        </Panel>
        <Panel>
            <h5>Ethereum Clients</h5>
            <EthViewClients clients={eth ? eth.clients : []} />
        </Panel>
      </div>
    )
  }
}

EthView.contextTypes = {
  store: PropTypes.object.isRequired
}

export default EthView
