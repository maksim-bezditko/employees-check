import "./employees-list-item.css";
import { Component } from "react";
var classNames = require("classnames")

class EmployeesListItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			"salary": this.props.salary + "$"
		}
	}

	// increase = () => {
	// 	this.setState(({increase}) => ({
	// 		increase: !increase
	// 	}))
	// }

	// rise = () => {
	// 	this.setState(({raised}) => ({
	// 		raised: !raised
	// 	}))
	// }

	changeSalary = (e) => {
		this.setState(() => ({
			"salary": e.target.value
		}))
	
	}


	render() {	
		const {name, increase, raised, deleteItemById, onIncreaseToggle, onRaisedToggle} = this.props;

		return (
			<li className={classNames(
				'list-group-item', 
				'd-flex', 
				'justify-content-between', 
				{ increase: increase}, 
				{like: raised})}>

				<span onClick={onRaisedToggle} className="list-group-item-label">{name}</span>
				<input onChange={(e) => this.changeSalary(e)} type="text" className="list-group-item-input" defaultValue={this.state.salary}/>
				<div className='d-flex justify-content-center align-items-center'>
					<button onClick={onIncreaseToggle} type="button"
						className="btn-cookie btn-sm ">
						<i className="fas fa-cookie"></i>
					</button>
	
					<button onClick={deleteItemById} type="button"
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