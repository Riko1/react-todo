let { combineReducers } = require('redux');
let task = require('./task');
let user = require('./user');

var rootReducer = combineReducers({	task, user });

module.exports = rootReducer;