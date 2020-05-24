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
      sortCrit: ``,
    };

    this.addVisit = this.addVisit.bind(this);
    this.editVisit = this.editVisit.bind(this);
    this.deleteVisit = this.deleteVisit.bind(this);
    this.sortList = this.sortList.bind(this);
    this.updateUI = this.updateUI.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  sortList(crit) {
    const { parkVisits } = this.state;
    if (crit === "Date") {
      parkVisits.sort((a, b) => {
        if (a.date.year > b.date.year) {
          return -1;
        } else if (a.date.year === b.date.year) {
          if (a.date.month > b.date.month) {
            return -1;
          } else if (a.date.month === b.date.month) {
            if (a.date.day > b.date.day) {
              return -1;
            } else {
              return 1;
            }
          } else {
            return 1;
          }
        } else {
          return 1;
        }
      });
    } else if (crit === "Rating") {
      parkVisits.sort((a, b) => (a.rating > b.rating ? -1 : 1));
    } else if (crit === "A - Z") {
      parkVisits.sort((a, b) => (a.parkName > b.parkName ? 1 : -1));
    }

    this.setState({
      parkVisits: parkVisits,
      sortCrit: crit,
    });
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
  }
  addVisit() {
    axios
      .post(`/api/parkVisits`, this.state.userInput)
      .then((res) => {
        this.setState({ parkVisits: res.data });
      })
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
  }
  deleteVisit(id) {
    axios
      .delete(`/api/parkVisits/${+id}`)
      .then((res) => this.setState({ parkVisits: res.data }))
      .catch((err) => console.log(err));
  }

  handleUpdate(elem) {
    this.setState({
      userInput: elem,
    });
  }

  render() {
    return (
      <div>
        <Options
          addVisit={this.addVisit}
          userInput={this.state.userInput}
          updateUI={this.updateUI}
          sortList={this.sortList}
          sortCrit={this.state.sortCrit}
          updateSortCrit={this.updateSortCrit}
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
