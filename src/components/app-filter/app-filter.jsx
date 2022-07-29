import { Component } from 'react';
import './app-filter.css';
var classNames = require("classnames")

class AppFilter extends Component {
   constructor(props) {
      super(props)
      this.state = {
         all: true,
         rise: false,
         bigSalary: false,
         currentFilter: "all"
      }
   }

   changeClasses = (e) => {
      const name = e.target.name;
      this.setState(() => ({
         all: false,
         rise: false,
         bigSalary: false,
         [name]: true,
         currentFilter: name
      }))
      this.props.changeFilterState(name)
   }

   render = () => {
      return (
         <div className="btn-group">
               <button type="button"
                       className={classNames("btn", {"btn-light": this.state.all, "btn-outline-light": !this.state.all})}
                       name="all"
                       onClick={this.changeClasses}>
                       Все сотрудники
               </button>
               <button type="button"
                       className={classNames("btn", {"btn-light": this.state.rise, "btn-outline-light": !this.state.rise})}
                       name="rise"
                       onClick={this.changeClasses}>
                       На повышение
               </button>
               <button type="button"
                       className={classNames("btn", {"btn-light": this.state.bigSalary, "btn-outline-light": !this.state.bigSalary})}
                       name="bigSalary"
                       onClick={this.changeClasses}>
                       З/П больше 1000$
               </button>
           </div>
      )
   }
}

export default AppFilter;