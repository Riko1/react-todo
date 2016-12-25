//Что бы наш код работал и в более старых браузерах
require('babel-polyfill');
require('../css/stylish.css');

let { 
	Route,
	Router, 
	Redirect, 
	IndexRoute, 
	IndexRedirect, 
	browserHistory, 
} = require('react-router');
let { Provider } 	= require('react-redux');
let Default 		= require('./pages/Default');
let TaskList 		= require('./components/TaskList/TaskList');

let store = require('./store/store');

$(() => {
	ReactDOM.render(
		<Provider store={ store }>
			<Router history={ browserHistory }>
				<Route path='/' component={ Default } >
					<IndexRoute component={ TaskList } />
				</Route>
			</Router>
		</Provider>,
		document.getElementById('app-wrapper')
	);
});