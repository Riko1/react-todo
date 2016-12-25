require('./Default.css');

var Menu = require('../components/Menu/Menu');

class Default extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="page">
				<Menu />
				<div className="page__content">
					<div className="container">
						{ this.props.children ? this.props.children : 'Welcome' }
					</div>
				</div>
	  		</div>
		);
	}
}

module.exports = Default;