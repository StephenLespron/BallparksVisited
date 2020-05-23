import React, { Component } from "react";
import axios from "axios";
import Options from "./Options";
import ListHeader from "./List-Header";
import ListData from "./List-Data";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      parkVisits: [],
    };

    this.addVisit = this.addVisit.bind(this);
    this.editVisit = this.editVisit.bind(this);
    this.deleteVisit = this.deleteVisit.bind(this);
    this.sortList = this.sortList.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/parkVisits")
      .then((res) => this.setState({ parkVisits: res.data }))
      .catch((err) => console.log(err));
  }

  addVisit(newVisitObj) {}
  editVisit(id, updatedBodyObj) {}
  deleteVisit(id) {}
  sortList(crit) {}

  render() {
    return (
      <div>
        <Options />
        <table className="Table">
          <ListHeader />
          <ListData parkVisits={this.state.parkVisits} />
        </table>
      </div>
    );
  }
}
