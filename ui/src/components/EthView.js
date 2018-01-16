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
          <td>{JSON.stringify(error.length > 1 ? error[1] : null)}</td>
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
          <td>{client.connected}</td>
          <td>{client.active}</td>
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

    return (
      <div className="EthView">
        <Grid>
          <Row>
            <h3>Ethereum Errors</h3>
          </Row>
          <Row>
            <h3>Ethereum Clients</h3>
          </Row>
        </Grid>
      </div>)
  }
}

EthView.contextTypes = {
  store: PropTypes.object.isRequired
}

export default EthView
