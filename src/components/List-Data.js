import React, { Component } from "react";
import ListRows from "./List-Rows";

export default class ListData extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit(id) {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }
  handleUpdate(ev) {}

  render() {
    return (
      <div id="listContainer">
        <ListRows
          parkVisits={this.props.parkVisits}
          deleteVisit={this.props.deleteVisit}
          isEditing={this.state.isEditing}
          toggleEdit={this.toggleEdit}
          userInput={this.props.userInput}
        />
      </div>
    );
  }
}
