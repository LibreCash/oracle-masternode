import React, { Component } from 'react';

import { Button } from 'react-bootstrap';

import { nodeOp } from '../actions'

const {Raphael,Paper,Set,Circle,Ellipse,Image,Rect,Text,Path,Line} = require('react-raphael');

var Chart = require('react-d3-core').Chart;

class LightNode extends Component {
  componentWillReceiveProps(nextProps) {

  }

  onStopClick() {
    nodeOp({
      code: 'onoff',
      on: false 
    })
  }

  render() {
    var node = this.props.node;

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



    var fields = []
    for (let [k, field] of Object.entries(node)) {
      console.log(field)
      if (k != 'connected' && k != 'options')
        fields.push(<div className=".MasterNode-label1">{k + ': ' + JSON.stringify(field)}</div>)
    }
    for (let [k, field] of Object.entries(node.options)) {
      console.log(field)
      fields.push(<div className=".MasterNode-label1">{k + ': ' + JSON.stringify(field)}</div>)
    }

//disabled="{node.connected ? 'true' : 'false'}
    //var prop = ['disabled']{...prop}
    var data = [
        {x:50,y:50,r:40,attr:{"stroke":"#0b8ac9","stroke-width":5},animate:Raphael.animation({cx:60},500,"<>")},
    ]

    var width = 200,
      height = 100,
      x = 0

    var data1 = [
      {
        name: "Lavon Hilll I",
        BMI: 20.57,
        age: 12,
        birthday: "1994-10-26T00:00:00.000Z",
        city: "Annatown",
        married: true,
        index: 1
      },
      {
        name: "Clovis Pagac",
        BMI: 24.28,
        age: 26,
        birthday: "1995-11-10T00:00:00.000Z",
        city: "South Eldredtown",
        married: false,
        index: 3
      },
    ]

    var chartSeries = [
      {
        field: 'BMI',
        name: 'BMI',
        color: '#ff7f0e'
      }
    ]

    return (
      <div className="LightNode">
        
        <div className="LightNode-label0">LightNode-{node.id}</div>
        <div className="LightNode-connected"style={connected.style}>{connected.text}</div>

        {fields}

        <Button bsStyle="danger" disabled={!node.connected} onClick={this.onStopClick}>Stop</Button>


        <Paper width={300} height={300}>
               <Set>
                {
                    data.map(function(ele,pos){
                        return (<Circle key={pos} x={ele.x} y={ele.y} r={ele.r} attr={ele.attr} animate={ele.animate}/>)
                    })
                }
                </Set>
                <Set>
                    <Rect x={30} y={14} width={40} height={50} attr={{"fill":"#10a54a","stroke":"#f0c620","stroke-width":5}}/>
                    <Ellipse x={15} y={19} ry={40} rx={100} attr={{"fill":"#fff","stroke":"#e11032"}} glow={{width:10,fill:true,color:"#0b8ac9",opacity:1}}/>
                </Set>
        </Paper>

        <Chart
            width= {width}
            height= {height}
            data= {data1}
            chartSeries= {chartSeries}
            x= {x}
            >
          </Chart>
      </div>
    );
  }
}

export default LightNode;
