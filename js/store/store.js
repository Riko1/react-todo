let redux 	= require('redux');
let thunk 	= require('redux-thunk').default;
let promise = require('redux-promise-middleware');
let reducer = require('../reducers/index');

let middleWare 	= redux.applyMiddleware(thunk);
let store 		= redux.createStore(reducer, {}, middleWare);

module.exports 	= store;