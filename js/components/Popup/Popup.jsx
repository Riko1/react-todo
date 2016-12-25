class Popup extends React.Component {
	constructor(props) {
		super(props);
		this.onAdd = this.onAdd.bind(this);
	}
	onAdd() {
		let date = new Date();
		let date_str = `${date.getDay()+1}.${date.getMonth()+1}.${date.getYear()}`;
		console.log(date_str)
		let task = {
			title: this.refs.title.value,
			description: this.refs.description.value,
			status: '',
			date: date_str
		}
		this.props.add(task);
	}
	render() {
		return (
			<div id="modal" className="modal fade bs-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
				<div className="modal-dialog modal-sm" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 className="modal-title" id="myModalLabel">
								Добавить задачу
							</h4>
						</div>
						<div className='modal-body'>
							<form>
								<div className="form-group">
									<label htmlFor="title">Задача</label>
									<input 
										ref="title"
										type="text" 
										className="form-control"
										placeholder="Заголовок"
									/>
							  	</div>
							  	<div className="form-group">
									<label htmlFor="title">Описание</label>
									<textarea 
										ref="description"
										className="form-control"
										placeholder="Описание"
									></textarea>
							  	</div>
							  	<div 
							  		type="submit"
							  		className="button btn btn-success"
							  		onClick={ this.onAdd }
							  	> Добавить </div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Popup;