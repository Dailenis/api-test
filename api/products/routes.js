'use strict';

const responses = require('../../utils/http_responses');
const handler = require('./handler');

module.exports.proxy = async function(context, req, res) {
  const query = req.query; // dictionary of query strings
  let body = req.body; // Parsed body based on content-type
  const method = req.method; // HTTP Method (GET, POST, PUT, etc.)
  const originalUrl = req.originalUrl; // Original URL of the request - https://myapp.azurewebsites.net/api/foo?code=sc8Rj2a7J
  const headers = req.headers; // dictionary of headers
  const params = req.params; // dictionary of params from URL
  const rawBody = req.rawBody; // unparsed body

  if (method === 'GET') body = await handler.get(req, res)

  context.res = {
    headers: {
      'content-type': 'application/json',
    },
    body,
  };
  context.done();
};
