import { Component } from 'react';
import './app-filter.css';
var classNames = require("classnames")

class AppFilter extends Component {

   render = () => {
      return (
         <div className="btn-group">
               <button type="button"
                       className={classNames("btn", {"btn-light": this.props.all, "btn-outline-light": !this.props.all})}
                       name="all"
                       onClick={this.props.changeClasses}>
                       Все сотрудники
               </button>
               <button type="button"
                       className={classNames("btn", {"btn-light": this.props.rise, "btn-outline-light": !this.props.rise})}
                       name="rise"
                       onClick={this.props.changeClasses}>
                       На повышение
               </button>
               <button type="button"
                       className={classNames("btn", {"btn-light": this.props.bigSalary, "btn-outline-light": !this.props.bigSalary})}
                       name="bigSalary"
                       onClick={this.props.changeClasses}>
                       З/П больше 1000$
               </button>
           </div>
      )
   }
}

export default AppFilter;