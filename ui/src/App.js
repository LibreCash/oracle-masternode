import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import { Button } from 'react-bootstrap';

import Main from './components/Main';

import { startup, initConnection, nodeOp } from './actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { ctx: { masterId: 0 } }
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch( nodeOp({ test: true }) ) 
  }

  componentDidUpdate(prevProps) {
    const { ctx, dispatch } = this.props
    if (ctx.connected != prevProps.ctx.connected && ctx.connected) {
      dispatch( initConnection({}) )
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to LibreBank UI Developer</h1>
        </header>

        <Main ctx={ this.props.ctx }></Main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { startupReducer } = state
  const ctx = startupReducer.ctx || { masterId: 0 }
  return { 
    ctx
  }
}

export default connect(mapStateToProps)(App)
