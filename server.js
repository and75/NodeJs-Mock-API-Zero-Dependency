/**
 * MOCK API ON PURE NODE JS (Zero-Dependency)
 * Node js Test for Backend or full stack developper
 * Module : Server
 * Author: Andrea Porcella
 * Year : 2023
 */

/**
 * Declaring 'use strict'
 */
'use strict'
const { createServer } = require('http')

/**
 * Product data
 */
const data = JSON.stringify([
  {id: 'A1', name: 'Vacuum Cleaner', rrp: '99.99', info: 'The suckiest vacuum in the world.'},
  {id: 'A2', name: 'Leaf Blower', rrp: '303.33', info: 'This product will blow your socks off.'},
  {id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Delicious overpriced chocolate.'}
])

/**
 * Initaliazing server from http
 */
const server = createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json')
  res.end(data)
})

/**
 * Set the port
 */
server.listen(3000)