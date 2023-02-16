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
  {id: 'A1', name: 'Aspirateurs', rrp: '99.99', info: 'L\'aspirateur le plus puissant au monde'},
  {id: 'A2', name: 'Souffleur de feuilles', rrp: '303.33', info: 'Ce produit va époustoufler vos chaussettes.'},
  {id: 'B1', name: 'Barre de chocolat', rrp: '22.40', info: 'Délicieux chocolat fabriqué à la main.'}
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