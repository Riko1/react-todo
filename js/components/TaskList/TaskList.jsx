require('./TaskList.css');
require('bootstrap');

let TaskItem = require('./TaskItem');
let { connect } = require('react-redux');
let { bindActionCreators } = require('redux');
let taskActions = require('../../actions/task');
let Popup = require('../Popup/Popup');

class TaskList extends React.Component {
	constructor(props) {
		super(props);
		this.data = [
			{
				title: 'Задача №1',
				description: 'desc',
				date: '26.03.2016',
				status: ''
			},
			{
				title: 'Задача с длинным пре длинным заголовком',
				description: 'desc2',
				date: '20.03.2016',
				status: 'complete'
			}
		]

		this.openPopup = this.openPopup.bind(this);
		this.add = this.add.bind(this);
	}
	add(task) {
		this.props.taskActions.add(task);
		$('#modal').modal('hide');
	}
	openPopup() {
		$('#modal').modal('show');
	}

	render() {
		//console.log(this.props)
		var itemsList = this.props.task.tasks.map((item, index) => {
			return <TaskItem key={ index } { ...item } />
		});

		return (
			<div className="content-wrapper row">
				<div className="task-list col-lg-9 col-md-8 col-sm-8 col-xs-1">
					{ itemsList }
				</div>
				<div className="task-actions col-lg-3 col-md-4 col-sm-4 col-xs-1">
					<div 
						className="button btn btn-default"
						onClick={ this.openPopup }
					>
							Добавить задачу
					</div>
				</div>
				<Popup add={ this.add }/>
			</div>
		);
	}
}

/*
 * Добавляем в props свойства текущего состояния компоненту.
*/
let mapStateToProps = function(state) {
	return {
		task: state.task,
		user: state.user
	}
}
/*
 * Добавляем в props компонента действия.
*/
let mapDispatchToprops = function(dispatch) {
	return {
		taskActions: bindActionCreators(taskActions, dispatch)
	}
}

module.exports = connect(mapStateToProps, mapDispatchToprops)(TaskList);