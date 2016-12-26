class TaskItem extends React.Component {
	constructor(props) {
		super(props);

		this.slideDown = this.slideDown.bind(this);
		this.statusChange = this.statusChange.bind(this);
	}
	slideDown(proxy, event) {
		let DOM_desc = $(this.refs.description);
		let isItem = !$(proxy.target).closest('.task-item__status').length;
		if(isItem)
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
	statusChange() {
		let id = +this.props.id;
		if (typeof this.props.statusChange == 'function')
			this.props.statusChange(+id);
	}
	render() {
		var data = this.props;
		return (
			<div 
				ref="item"
				data-id={ data.id }
				className={ "task-item clearfix " + data.status}
				onClick={ this.slideDown }
			>
				<div className="clearfix">
					<div className="task-item__name">
						<span>{ data.title }</span>
					</div>
					<div className="task-item__status" onClick={ this.statusChange }></div>
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