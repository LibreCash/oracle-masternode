// EthView

import React, { Component } from 'react'
import PropTypes from "prop-types"

import { Button, Label, Grid, Row, Col, Table } from 'react-bootstrap'

// CLIENTS
//  - errors
//  - client 
//      infura
//      web3
// ERROR
// CLIENT
//  Connected
//  Active
//  LastPrice
//  LastUpdate

class EthViewErrors extends Component {
  render() {
    var errors = []
    this.props.errors.forEach((error) => {
      errors.push(
        <tr>
          <td>{error[0]}</td>
          <td>{JSON.stringify(error.length > 1 ? error.slice(1) : null)}</td>
        </tr>
      )
    })

    return (
      <Table id="tableEthViewErrors" className="EthViewErrorsTable" striped bordered condensed hover>
        <thead>
          <tr>
            <th>Code</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {errors}
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
        <Grid>
          <Row>
            <h5>Ethereum Errors</h5>
            <EthViewErrors errors={eth ? eth.errors : []} />
          </Row>
          <Row>
            <h5>Ethereum Clients</h5>
            <EthViewClients clients={eth ? eth.clients : []} />
          </Row>
        </Grid>
      </div>)
  }
}

EthView.contextTypes = {
  store: PropTypes.object.isRequired
}

export default EthView
