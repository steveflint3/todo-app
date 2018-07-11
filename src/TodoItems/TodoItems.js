import React from "react";
import FlipMove from "react-flip-move";

class TodoItems extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   data: null
    // };
  }

  createTasks = (item) => {
    return <li onClick={() => this.delete(item.key)}
                key={item.key}>{item.text}</li>
  }

  delete = (key) => {
    console.log("key is: ", key);
    this.props.delete(key);
  }

  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
      <FlipMove duration={250} easing="ease-out">
        {listItems}
      </FlipMove>
      </ul>
    );
  }
}


export default TodoItems;
