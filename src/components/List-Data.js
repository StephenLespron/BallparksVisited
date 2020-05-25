import React, { Component } from "react";
import ListRows from "./List-Rows";

export default class ListData extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    // this.handleUpdate = this.handleUpdate.bind(this);
  }

  toggleEdit(obj) {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }
  // handleUpdate(elem) {
  //   this.props.UItoElem(elem);
  // }

  render() {
    return (
      <tbody id="listContainer">
        <ListRows
          parkVisits={this.props.parkVisits}
          deleteVisit={this.props.deleteVisit}
          isEditing={this.state.isEditing}
          toggle={this.toggleEdit}
          userInput={this.props.userInput}
          handleUpdate={this.props.handleUpdate}
          updateUI={this.props.updateUI}
          updateVisit={this.props.editVisit}
          sortList={this.props.sortList}
        />
      </tbody>
    );
  }
}
