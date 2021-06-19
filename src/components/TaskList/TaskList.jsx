import React, { Component } from "react";
import "./TaskList.css";

class TaskList extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         items: []
    //     };

    //     this.addItem = this.addItem.bind(this);
    //     this.deleteItem = this.deleteItem.bind(this);
    // }

    // addItem(e) {
    //     if (this._inputElement.value !== "") {
    //         var newItem = {
    //             text: this._inputElement.value,
    //             key: Date.now()
    //         };

    //         this.setState((prevState) => {
    //             return {
    //                 items: prevState.items.concat(newItem)
    //             };
    //         });
    //     }

    //     this._inputElement.value = "";

    //     console.log(this.state.items);

    //     e.preventDefault();
    // }

    // deleteItem(key) {
    //     var filteredItems = this.state.items.filter(function (item) {
    //         return (item.key !== key)
    //     });

    //     this.setState({
    //         items: filteredItems

    //     });
    // }


    render() {
        return (


            <div className="task-wrapper">
                <div className="task-decoration"></div>
                <div>
                <div className="task-header"><h3>Tasks</h3><span>+</span></div>
                    <ul className="task-list">
                        <li className="task-list-item">
                            <div className="task-list-checkbox"><input type="checkbox"/></div> 
                            <label className="task-list-text">Complete one project task or two or three</label>
                        </li>
                    </ul>
                </div>
            </div>


            // <div className="taskListMain">
            //     <div className="header">
            //         <form onSubmit={this.addItem}>
            //             <input ref={(a) => this._inputElement = a}
            //             placeholder="Tasks"/>
            //             <button type="submit">+</button>
            //         </form>
            //     </div>
            // </div>
        );
    }
}

export default TaskList;