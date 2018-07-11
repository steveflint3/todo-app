import React from "react";
import TodoItems from "../TodoItems/TodoItems";
import "./TodoList.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
/*In the input you are storing the contents/value of input in a variable called a using ref*/
  addItem = (e) => {
    if(this.inputElement.value !== ""){
      const newItem = {
        //e.target.value here?
        text: this.inputElement.value,
        key: Date.now()
      };
//this format for setting state is not "setting state" in the traditional way,
//it is mutating the state by taking prevState argument and concatenating newItem to item array
      this.setState((prevState) => {
        return {
          //concat returns a new array as opposed to modifying existing one
         items: prevState.items.concat(newItem)
        };
      });
    }
    this.inputElement.value = "";
    console.log(this.state.items);
    //This prevents any kind of automatic reload
    e.preventDefault();
  }

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => {

      return (item.key !== key)
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return(
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this.inputElement = a}
                    placeholder="enter task">
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
          delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
