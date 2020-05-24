import React, { Component } from "react";
import AddEdit from "./addEdit";

export default class Options extends Component {
  constructor() {
    super();
    this.state = {
      areWeAdding: false,
    };

    this.toggleAdd = this.toggleAdd.bind(this);
  }

  toggleAdd() {
    this.setState({
      areWeAdding: !this.state.areWeAdding,
    });
  }

  render() {
    return (
      <div className="Options">
        <button onClick={() => this.toggleAdd()}>Add</button>
        <div
          className="addEditBox"
          style={
            !this.state.areWeAdding ? { display: "none" } : { display: "flex" }
          }
        >
          <AddEdit
            userInput={this.props.userInput}
            updateUI={this.props.updateUI}
            updateVisit={this.props.addVisit}
            areWeAdding={this.props.areWeAdding}
            toggle={this.toggleAdd}
            sortCrit={this.props.sortCrit}
            sortList={this.props.sortList}
          />
        </div>
        <div className="sbBox">
          <p>Sort By:</p>
          <select onChange={(ev) => this.props.sortList(ev.target.value)}>
            <option value="Date">Date</option>
            <option value="A - Z">A - Z</option>
            <option value="Rating">Rating</option>
          </select>
        </div>
      </div>
    );
  }
}
