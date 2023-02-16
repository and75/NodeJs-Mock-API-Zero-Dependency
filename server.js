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


/**
 * Import file system module & Create server
 */
const { readFile } = require('fs');
const { createServer } = require('http');

const handlingErrors = (error)=>{
    console.error(error);
    let formatError = {
      success : false,
      message : error,
      payload : null
    }
    return formatError;
}

const getDataByType = async (type) => {

  //Use Promise logic
  return new Promise((resolve, reject) => {
  
    //Use a Template literals
    let path = `./data${type}.json`;
    
    //Use async readFile of node Fs
    readFile(path, (err, data) => {
      if (err) { reject(err) };
      let jsonData = JSON.parse(data);
      resolve(jsonData);
    });

  })

}

/**
 * Initaliazing server from http
 */
const server = createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json')
  const reqType = req.url;
  getDataByType(reqType).then((data) => {
    res.statusCode = 200;
    res.end(JSON.stringify({
      success:true,
      message : `Your request for "${reqType}" has been processed successfully`,
      payload : data
    }))
  }).catch((error) => {
    res.statusCode = 400;
    res.end(JSON.stringify(handlingErrors(error)));
  });
})

/**
 * Set the port
 */
server.listen(3000)
console.log('Node.js web server at port 3000 is running..')