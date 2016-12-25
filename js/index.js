//Что бы наш код работал и в более старых браузерах
/*require('babel-polyfill');

require('jquery');
require('bootstrap');
 
var { 
	Route, 
	Router, 
	Redirect, 
	IndexRoute, 
	IndexRedirect, 
	BrowserHistory, 
} = require('react-router');
var Default = require('./pages/Default');

//var TaskList = require('./components/TaskList/TaskList');

//var store = require('./store/store');

$(() => {
	console.log(document.getElementById('app-wrapper'))
	ReactDOM.render(
		<Router history={ BrowserHistory }>
			<Route path='/' component={ Default } />
		</Router>,
		document.getElementById('app-wrapper')
	);
})*/
$(function() {
	ReactDOM.render(
		<div>Привет, мир!</div>,
		document.getElementById('app-wrapper')
	)	
})