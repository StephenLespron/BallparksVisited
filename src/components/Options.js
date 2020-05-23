import React, { Component } from "react";
import AddEdit from "./addEdit";

export default class Options extends Component {
  constructor() {
    super();
    this.state = {
      areWeAdding: false,
      sortCriteria: ``,
    };

    this.toggleAdd = this.toggleAdd.bind(this);
  }

  updateSortCrit(crit) {}
  toggleAdd() {
    this.setState({
      areWeAdding: !this.state.areWeAdding,
    });
  }
  handleAdd() {}

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
          />
        </div>
        <div className="sbBox">
          <p>Sort By:</p>
          <select>
            <option>A - Z</option>
            <option>Date</option>
            <option>Rating</option>
          </select>
        </div>
      </div>
    );
  }
}
