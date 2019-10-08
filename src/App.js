import React, { Component } from 'react';
import './App.css';
import { tmpdir } from 'os';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        "Cheese",
        "Bacon",
        "Kale",
        "Eggs",
        "Italian bread"
      ],
      // whatever is in  the submit input, we're going to store it here. See line 26 
      item: ""
    };
  }
  // e = synthetic event. preventDefault will prevent the normal behavior of this element
  addItem = e => {
    e.preventDefault();
    // how can we add our new list to the list of items?
    let temp = [...this.state.items];
    temp.push(this.state.item)
    this.setState({items: temp, item: ""}) //we can set more than one thing in setState
    
  }
  changeItem = e => {
    console.log(e.target.value);
    this.setState({item: e.target.value})
  }
  render() {
    return (
      <div className="container">
        <h1 className="jumbo">Groceries!</h1>
        {/* if we want to list all of our groceries then we need to use map to display them  */}
        <ul>
          {
            this.state.items.map( (item, i) =>
              <li key={i}>{item}</li>
            )
          }
        </ul>
        {/* we need some sort of event on the form */}
        <form onSubmit={this.addItem} >
          <input 
            type ="text" 
            name="foodName" 
            onChange={this.changeItem}
            // it will reflect whatever is in state
            value={this.state.item} 
          />
          <input type="submit" />
        </form>
        {}
      </div>
    );
  }
}

export default App;
