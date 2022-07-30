import "./app.css"
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeeAddForm from "../employee-add-form/employee-add-form";
import React from "react";
import { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props)
		this.state = JSON.parse(localStorage.getItem("state")) || {
			data: [
				{name: "Max Smith", salary: "10000", id: "1", increase: false, raised: false},
				{name: "Brad Franklin", salary: "7000", id: "2", increase: false, raised: false},
				{name: "Stephen King", salary: "600", id: '3', increase: false, raised: false},
				{name: "Charles Dickens", salary: "7600", id: '4', increase: false, raised: false},
				{name: "Ernest Hemingway", salary: "4800", id: '5', increase: false, raised: false},
				{name: "George Orwell", salary: "1400", id: '6', increase: false, raised: false},
				{name: "Mark Twain", salary: "4300", id: '7', increase: false, raised: false},
				{name: "Dante Alighieri", salary: "5600", id: '8', increase: false, raised: false},
			],
			classes: JSON.parse(localStorage.getItem("classes")) || {
				all: true,
				rise: false,
				bigSalary: false
			},
			searchTerm: "",
			filter: localStorage.getItem("filter") || "all"
		}
		this.maxId = this.state.data.length
		this.initialData = this.state.data
	}

	deleteItemById = (id) => {
		this.setState(({data}) => ({
			data: data.filter(item => item.id !== id)
		}))
		setTimeout(this.updateLocalStorage, 500)
	}

	addItem = (name, salary) => {
		if (name.length !== 0 && salary.length !== 0 && name.length < 50 && salary.length <= 7 && salary > -1 && /^[a-zA-Z\s]*$/g.test(name)) {
			this.setState(({data}) => ({
				data: [...data, {name: name, salary: salary, id: `${this.maxId++ + 1}`, increase: false}]
			}))
			setTimeout(this.updateLocalStorage, 500)
		}

	}

	onIncreaseToggle = (id) => {
		this.setState(state => ({
			data: state.data.map(item => {
				if (item.id === id) {
					return {...item, increase: !item.increase}
				}
				return item
			})
			
		}))
		setTimeout(this.updateLocalStorage, 500)
	}

	onRaisedToggle = (id) => {
		this.setState(state => ({
			data: state.data.map(item => {
				if (item.id === id) {
					return {...item, raised: !item.raised}
				}
				return item
			})
			
		}))
		setTimeout(this.updateLocalStorage, 500)
	}

	returnCorrectData = (searchTerm, data) => {
		if (searchTerm.length === 0) {
			return data
		} else {
			return data.filter(item => item.name.indexOf(searchTerm) > -1)
		}
	}

	changeSearchTerm = (newValue) => {
		this.setState(() => ({
			searchTerm: newValue
		}))
		setTimeout(this.updateLocalStorage, 500)
	}


	returnDataOnFilter = (data, filterName) => {
		if (filterName === "all") {
			return data
		} else if (filterName === "rise") {
			return data.filter(item => item.raised)
		} else {
			return data.filter(item => item.salary > 1000)
		}
	}

	changeSalary = (key, newValue) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === key) {
					item.salary = newValue;
					return item;
				} else {
					return item;
				}
			})
		}))
		setTimeout(this.updateLocalStorage, 500)
	}

	updateLocalStorage = () => {
		localStorage.setItem("state", JSON.stringify(this.state))
	}

	changeClasses = (e) => {
      const name = e.target.name;
      this.setState(() => ({
			classes: {
				all: false,
				rise: false,
				bigSalary: false,
				[name]: true,
			},
			filter: name
      }))
      setTimeout(this.updateLocalStorage, 500)
   }


	render() {
		return (
			<React.StrictMode>
				<div className="mycontainer">
					<div className="app">
						<AppInfo 
							total={this.state.data.length} 
							awarded={this.state.data.reduce((acc, curr) => {
								if (curr.increase) {
									return acc + 1;
								} 
								return acc;
							}, 0)}/>
		
						<div className="search-panel">
							<SearchPanel
								changeSearchTerm={this.changeSearchTerm}
								searchValue={this.state.searchTerm}/>
							<AppFilter 
								changeClasses={this.changeClasses}
								{...this.state.classes}/>
						</div>
		
						<EmployeesList 
							data={this.returnDataOnFilter(this.returnCorrectData(this.state.searchTerm, this.state.data), this.state.filter)} 
							deleteItemById={this.deleteItemById} onRaisedToggle={this.onRaisedToggle} 
							onIncreaseToggle={this.onIncreaseToggle}
							changeSalary={this.changeSalary}/>
		
						<EmployeeAddForm 
							addItem={this.addItem}/>
					</div>
				</div>
				
			</React.StrictMode>
		)
	}
	
}

export default App;



