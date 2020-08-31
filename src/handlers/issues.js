// src/handlers/issues.js
2
3const utils = require("../utils");
4const axios = require("axios");
5
6module.exports.handler = async (context, req) => {
7  context.log("Issue Handler hit");
8
9  const owner = utils.getQueryOrBodyParam(req, "owner");
10  const repo = utils.getQueryOrBodyParam(req, "repo");
11
12  if (owner && repo) {
13    const response = await axios({
14      url: `https://api.github.com/repos/${owner}/${repo}/issues`,
15      method: "get"
16    });
17    context.res = {
18      status: 200,
19      body: response.data
20    };
21  } else {
22    context.res = {
23      status: 400,
24      body: "Please pass the name of an owner and a repo in the request"
25    };
26  }
27};