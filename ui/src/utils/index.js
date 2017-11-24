import React from 'react'

import { Table } from 'react-bootstrap'

export function tickersNetToChart(tickers) {
    var data = []
    try {
        tickers.forEach((ticker) => {
          data.push({
            date: new Date(ticker.timestamp),
            open: ticker.low,
            high: ticker.high,
            low: ticker.low,
            close: ticker.high,
            volume: ticker.volume
          })
        })
	} catch (e) {
		console.log(e)
	}
    return data
}

export function renderObjectProps(object, exclude = []) {
    var fields = []
    for (let [k, field] of Object.entries(object)) {
      if (exclude.indexOf(k) == -1)
        fields.push(
        	<tr>
	        	<td>{k}</td>
	        	<td>{JSON.stringify(field)}</td>
	        </tr>
        )
	}
    return (
    	<Table striped bordered condensed hover>
    		<tbody>
    			{fields}
    		</tbody>
    	</Table>)
}
