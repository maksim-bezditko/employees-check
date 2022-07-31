import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {

	render () {
		return (
			<input 
				type="text" 
				onChange={(e) => this.props.changeSearchTerm(e.target.value)} 
				className="form-control search-input" 
				placeholder="Найти сотрудника" 
				value={this.props.searchValue}/>
		)
	}
	
}

export default SearchPanel;