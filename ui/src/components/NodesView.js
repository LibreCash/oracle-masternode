import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Button, Label, Grid, Row, Col, Table, Panel, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

import { addNode, removeNode } from '../actions'

class NodesView extends Component {

  onAddNode () {
    const { dispatch } = this.context.store
    dispatch( addNode({
      name: this.refNewNodeName,
      url: this.refNewNodeUrl,
      login: this.refNewNodeLogin,
      password: this.refNewNodePassword,
    }))
  }

  onRemoveNode (id) {
    const { dispatch } = this.context.store
    dispatch( addNode({
      id,
    }))
  }

  render() {

  	var nodes0 = [{
  		id: '0',
  		isHardConfigured: true,
  		host: 'localhost',
  		port: 12345,
  		status: 'offline'
  	}]
    var nodes = []

    //this.props.nodes
    nodes0.forEach((node) => {
      nodes.push(
        <tr>
          <td>{node.id}</td>
          <td>{node.isHardConfigured ? '+' : ''}</td>
          <td>{`${node.host}:${nodes.port}`}</td>
          <td>{node.status}</td>
          <td><Button className="NewNode-button-shutdown pull-right" bsStyle="danger" onClick={this.onRemoveNode.bind(this, node.id)}>Delete</Button></td>
        </tr>
      )
    })

    return (
      <div className="NodesView">
          <Panel>
            <h2>Add new Lightnode</h2>
            <Form horizontal>
              <FormGroup controlId="formHorizontalName">
                <Col componentClass={ControlLabel} sm={2}>
                  <ControlLabel>Name</ControlLabel>
                </Col>
                <Col sm={10}>
                  <FormControl id="formHorizontalName" inputRef={ref => {this.refNewNodeName = ref; }} />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                  <ControlLabel>URL</ControlLabel>
                </Col>
                <Col sm={10}>
                  <FormControl inputRef={ref => {this.refNewNodeUrl = ref; }} />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                  <ControlLabel>Login</ControlLabel>
                </Col>
                <Col sm={10}>
                  <FormControl inputRef={ref => {this.refNewNodeLogin = ref; }} />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                  <ControlLabel>Password</ControlLabel>
                </Col>
                <Col sm={10}>
                  <FormControl inputRef={ref => {this.refNewNodePassword = ref; }} />
                </Col>
              </FormGroup>
              <Col smOffset={2} sm={10}>
                <Button className="NewNode-button-shutdown pull-left" bsStyle="success" onClick={this.onAddNode.bind(this)}>Add</Button>
              </Col>
            </Form>
          </Panel>
          <Panel>
            <h3>Lightnodes</h3>
            <Table className="NodesTable" striped bordered condensed hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>hardcoded</th>
                  <th>url</th>
                  <th>status</th>
                  <th>control</th>
                </tr>
              </thead>
              <tbody>
                {nodes}
              </tbody>
            </Table>
          </Panel>
      </div>
    )
  }
}

NodesView.contextTypes = {
  store: PropTypes.object.isRequired
}

export default NodesView;
