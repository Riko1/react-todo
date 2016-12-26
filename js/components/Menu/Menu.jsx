require('./Menu.css');
let { Link } = require('react-router');

class Menu extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">Wrok-list</Link>

                    </div>
                    <div 
                        className="collapse navbar-collapse" 
                        id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Link</Link></li>
                            <li><Link to="/">Link</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <div 
                                    className="button btn btn-success login" 
                                    to="/"
                                >login</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
		);
	}
}

module.exports = Menu;