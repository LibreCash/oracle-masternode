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
        <h3>Nodes</h3>
        <Panel>
          <Panel>
            <Form inline className="pull-left">
              <FormGroup>
                <ControlLabel>Name:</ControlLabel>
                <FormControl inputRef={ref => {this.refNewNodeName = ref; }} />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Url:</ControlLabel>
                <FormControl inputRef={ref => {this.refNewNodeUrl = ref; }} />
              </FormGroup>
              <Button className="NewNode-button-shutdown pull-right" onClick={this.onAddNode.bind(this)}>Add</Button>
            </Form>
          </Panel>
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
