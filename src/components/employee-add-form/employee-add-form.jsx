import { Component } from "react";
import "./employee-add-form.css";

class EmployeeAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            salary: ""
        }
    }

    onChange = (e) => {
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    render() {
        const {addItem} = this.props;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form"
                    onSubmit={(e) => {
                        e.preventDefault()
                        addItem(this.state.text, this.state.salary)
                    }}>
                    <div className="inputs">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        onChange={(e) => this.onChange(e)}
                        value={this.state.text}
                        name="text"/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        value={this.state.salary}
                        onChange={(e) => this.onChange(e)}/>

                    </div>
    
                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
        
            

}

export default EmployeeAddForm;