import React, { Component } from 'react'
import PropTypes from "prop-types"

import { Button, Label, Grid, Row, Col, Table } from 'react-bootstrap'

// client
// network name
// last rate
// next rate

class EthView extends Component {
	
  render() {

    return (
      <div className="LightNode">
        <Grid>
          <Row>
            <Col xs={6} md={6}>
              <Button className="pull-left" bsStyle="success"}>9.99 ETH</Button>
            </Col>
          </Row>
        </Grid>
      </div>)
  }
}

EthView.contextTypes = {
  store: PropTypes.object.isRequired
}

export default EthView
