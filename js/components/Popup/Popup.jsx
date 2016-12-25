require('./Popup.css');

class Popup extends React.Component {
	constructor(props) {
		super(props);
		this.onAdd = this.onAdd.bind(this);
		this.getTimeString = this.getTimeString.bind(this);
		this.clearForm = this.clearForm.bind(this);
	}
	clearForm() {
		$(this.refs.form).find('input').val('');
		$(this.refs.form).find('textarea').val('');
	}
	getTimeString() {
		let date = new Date();
		let day = (date.getDay()+1) < 10 
			? '0' + (date.getDay()+1) 
			: (date.getDay()+1);
		let month = (date.getMonth()+1) < 10 
			? '0' + (date.getDay()+1)
			: (date.getMonth()+1);
		let year = date.getFullYear();
		let hours = (date.getHours()) < 10 
			? '0' + (date.getHours())
			: (date.getHours());
		let minutes = (date.getMinutes()) < 10 
			? '0' + (date.getMinutes())
			: (date.getMinutes());
		let seconds = (date.getSeconds()) < 10 
			? '0' + (date.getSeconds())
			: (date.getSeconds());

		return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
	}
	onAdd(proxy, event) {
		proxy.preventDefault();

		let task = {
			title: this.refs.title.value,
			description: this.refs.description.value,
			status: '',
			date: this.getTimeString()
		}
		this.clearForm();
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
							<form ref="form" onSubmit={ this.onAdd }>
								<div className="form-group">
									<label htmlFor="title">Задача</label>
									<input 
										autoFocus
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