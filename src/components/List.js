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
      userInput: {
        parkName: `MLB Ballparks`,
        date: { month: ``, day: ``, year: `` },
        teams: { home: ``, away: `` },
        notes: ``,
        rating: ``,
      },
    };

    this.addVisit = this.addVisit.bind(this);
    this.editVisit = this.editVisit.bind(this);
    this.deleteVisit = this.deleteVisit.bind(this);
    this.sortList = this.sortList.bind(this);
    this.updateUI = this.updateUI.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/parkVisits")
      .then((res) => this.setState({ parkVisits: res.data }))
      .catch((err) => console.log(err));
  }
  updateUI(elem, val) {
    if (elem === `home` || elem === `away`) {
      this.setState({
        userInput: {
          ...this.state.userInput,
          teams: { ...this.state.userInput.teams, [elem]: val },
        },
      });
    } else if (elem === `month` || elem === `day` || elem === `year`) {
      this.setState({
        userInput: {
          ...this.state.userInput,
          date: { ...this.state.userInput.date, [elem]: +val },
        },
      });
    } else {
      this.setState({
        userInput: { ...this.state.userInput, [elem]: val },
      });
    }
    console.table(this.state.userInput);
  }
  addVisit(newVisitObj) {
    axios
      .post(`/api/parkVisits`, newVisitObj)
      .then((res) => this.setState({ parkVisits: res.data }))
      .catch((err) => console.log(err));

    this.setState({
      userInput: {
        parkName: `MLB Ballparks`,
        date: { month: ``, day: ``, year: `` },
        teams: { home: ``, away: `` },
        notes: ``,
        rating: ``,
      },
    });
  }
  editVisit(id, updatedBodyObj) {}
  deleteVisit(id) {
    axios
      .delete(`/api/parkVisits/${id}`)
      .then((res) => this.setState({ parkVisits: res.data }))
      .catch((err) => console.log(err));
  }
  sortList(crit) {}

  render() {
    return (
      <div>
        <Options
          addVisit={this.addVisit}
          userInput={this.state.userInput}
          updateUI={this.updateUI}
        />
        <table className="Table">
          <ListHeader />
          <ListData
            parkVisits={this.state.parkVisits}
            deleteVisit={this.deleteVisit}
            userInput={this.state.userInput}
          />
        </table>
      </div>
    );
  }
}
