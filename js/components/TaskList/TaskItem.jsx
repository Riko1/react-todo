class TaskItem extends React.Component {
	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}
	onClick(proxy, event) {
		let DOM_desc = $(this.refs.description);
		if (!DOM_desc.hasClass('opened')) {
			$(this.refs.item)
				.parent()
				.find('.opened')
				.removeClass('opened')
				.slideUp(300);

			DOM_desc.addClass('opened').slideDown(300);
		} else {
			DOM_desc.removeClass('opened').slideUp(300);
		}
	}
	render() {
		var data = this.props;
		return (
			<div 
				ref="item"
				className={ "task-item clearfix " + data.status}
				onClick={ this.onClick }
			>
				<div className="clearfix">
					<div className="task-item__name">
						<span>{ data.title }</span>
					</div>
					<div className="task-item__status"></div>
				</div>
				<div className="task-item__description" ref="description">
					{ data.description }
					<i className="task-item__date">
						{ data.date }
					</i>
				</div>
			</div>
		);
	}
}

module.exports = TaskItem;