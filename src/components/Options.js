import React, { Component } from "react";

export default class Options extends Component {
  constructor() {
    super();
    this.state = {
      toggleAdd: false,
      sortCriteria: ``,
    };
  }

  updateSortCrit(crit) {}
  handleAdd() {}

  render() {
    return (
      <div className="Options">
        <button>Add</button>
        <div className="sbBox">
          <p>Sort By:</p>
          <select>
            <option>a - z</option>
            <option>date</option>
            <option>rating</option>
          </select>
        </div>
      </div>
    );
  }
}
