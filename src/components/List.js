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
        parkName: ``,
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
    this.handleUpdate = this.handleUpdate.bind(this);
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
  addVisit() {
    axios
      .post(`/api/parkVisits`, this.state.userInput)
      .then((res) => this.setState({ parkVisits: res.data }))
      .catch((err) => console.log(err));

    this.setState({
      userInput: {
        parkName: ``,
        date: { month: ``, day: ``, year: `` },
        teams: { home: ``, away: `` },
        notes: ``,
        rating: ``,
      },
    });
  }
  editVisit() {
    console.log(this.state.parkVisits);
    axios
      .put(`/api/parkVisits/${this.state.userInput.id}`, this.state.userInput)
      .then((res) => this.setState({ parkVisits: res.data }))
      .catch((err) => console.log(err));

    this.setState({
      userInput: {
        parkName: ``,
        date: { month: ``, day: ``, year: `` },
        teams: { home: ``, away: `` },
        notes: ``,
        rating: ``,
      },
    });
    console.log(this.state.parkVisits);
  }
  deleteVisit(id) {
    axios
      .delete(`/api/parkVisits/${+id}`)
      .then((res) => this.setState({ parkVisits: res.data }))
      .catch((err) => console.log(err));

    console.log(id);
    console.log(this.state.parkVisits);
  }

  handleUpdate(elem) {
    this.setState({
      userInput: elem,
    });
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
            handleUpdate={this.handleUpdate}
            parkVisits={this.state.parkVisits}
            deleteVisit={this.deleteVisit}
            userInput={this.state.userInput}
            updateUI={this.updateUI}
            editVisit={this.editVisit}
          />
        </table>
      </div>
    );
  }
}
