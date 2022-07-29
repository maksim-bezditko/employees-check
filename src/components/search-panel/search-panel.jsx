import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchValue: ""
		}
	}

	onSearch = (e) => {
		const newTerm = e.target.value;
		this.setState(() => ({
			searchValue: newTerm
		}))
		this.props.onSearchTermChange(e.target.value)
	}	

	render () {
		return (
			<input type="text" onChange={this.onSearch} className="form-control search-input" placeholder="Найти сотрудника" value={this.state.searchValue}/>
		)
	}
	
}

export default SearchPanel;