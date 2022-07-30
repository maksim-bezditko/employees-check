import "./employees-list.css";
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data, deleteItemById, onIncreaseToggle, onRaisedToggle, changeSalary}) => {
	const listItems = data.map(item => {
		const {id, ...others} = item;
		return <EmployeesListItem
			changeSalary={changeSalary}
			id={id}
			key={id} 
			{...others} 
			deleteItemById={() => deleteItemById(id)} 
			onIncreaseToggle={() => onIncreaseToggle(id)}
			onRaisedToggle={() => onRaisedToggle(id)}/>
	})


	return (
		<ul className="app-list list-group">
			{listItems}
		</ul>
	)
}

export default EmployeesList;