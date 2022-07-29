import { Component } from "react";
import "./app-info.css";

class AppInfo extends Component {

	render () {
		return (
			<div className="app-info">
				<h1>Количество сотрудников нашей компании</h1>
				<h2>Общее количество сотрудников: {this.props.total}</h2>
				<h2>Премию получат: {this.props.awarded}</h2>
			</div>
		)
	}
}

export default AppInfo;