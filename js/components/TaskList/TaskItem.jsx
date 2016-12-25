class TaskItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var data = this.props;
		return (
			<div className={ "task-item clearfix " + data.status}>
				<div className="task-item__name">
					<span>{ data.title }</span>
				</div>
				<div className="task-item__status"></div>
				<div className="task-item__description">
					{ data.description }
					<div className="task-item__date">
						{ data.date }
					</div>
				</div>
			</div>
		);
	}
}

module.exports = TaskItem;