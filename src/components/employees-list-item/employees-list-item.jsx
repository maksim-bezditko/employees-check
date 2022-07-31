import "./employees-list-item.css";
import { Component } from "react";
var classNames = require("classnames")

class EmployeesListItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			"salary": parseInt(this.props.salary) || 0
		}
	}

	changeSalary = (e) => {
		if (e.target.value.length > 7) {
			e.target.value = e.target.value.slice(0, 7)
		}
		this.setState(() => ({
			"salary": parseInt(e.target.value) || 0
		}))
		this.props.changeSalary(this.props.id, parseInt(e.target.value) || 0)
	}


	render() {	
		const {name, increase, raised, deleteItemById, onIncreaseToggle, onRaisedToggle} = this.props;

		return (
			<li className={classNames(
				'list-group-item', 
				"d-flex",
				"justify-content-between",
				{ increase: increase}, 
				{like: raised})}>
				<span 
					onClick={onRaisedToggle} 
					className="list-group-item-label">{name}</span>
				<div className='d-flex justify-content-end align-items-center'>
					<input 
						onChange={this.changeSalary} 
						type="text" 
						className="list-group-item-input" 
						value={this.state.salary}/>
					<div className={classNames("dollar_sign", {dollar_sign_on_active: increase})}>$</div>
					<button 
						onClick={onIncreaseToggle} 
						type="button"
						className="btn-cookie btn-sm ">
						<i className="fas fa-cookie"></i>
					</button>
	
					<button 
						onClick={deleteItemById} 
						type="button"
						className="btn-trash btn-sm ">
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li>
		)
	}
	
}

export default EmployeesListItem;