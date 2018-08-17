'use strict';

const axios = require('axios');

let local = 'http://localhost:3000';
let staging = 'http://opportunitybot-fahmi.herokuapp.com';

axios.defaults.baseURL = local;

module.exports = {
    axios
}