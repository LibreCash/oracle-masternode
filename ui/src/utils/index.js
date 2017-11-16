import React from 'react'

import { Table } from 'react-bootstrap'

export function ticketsNetToChart(tickets) {
    var data = []
    tickets.forEach((ticket) => {
      data.push({
        date: new Date(ticket.timestamp),
        open: ticket.low,
        high: ticket.high,
        low: ticket.low,
        close: ticket.high,
        volume: ticket.volume
      })
    })
    return data
}

export function renderObjectProps(object, exclude = []) {
    var fields = []
    for (let [k, field] of Object.entries(object)) {
      console.log(field)
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
