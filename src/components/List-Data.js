import React, { Component } from "react";

export default class ListData extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      userInput: {
        parkName: ``,
        date: ``,
        teams: { home: ``, away: `` },
        notes: ``,
        rating: null,
      },
    };
  }

  toggleEdit() {}
  handleUpdate(ev) {}

  listVisits() {
    const visitsArr = this.props.parkVisits.map((elem) => (
      <div
        style={{ display: "flex", height: "20%", width: "calc(100% + 55px)" }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
          }}
        >
          <tr key={elem.id} className="visitRow">
            <td className="width15 parkinfo">
              <div>{`${elem.parkName}`}</div>
              <img alt={elem.parkName} src={elem.parkImg} className="bpImg" />
            </td>
            <td className="width10">
              {elem.date.month}/{elem.date.day}/{elem.date.year}
            </td>
            <td className="width10" style={{ whiteSpace: "pre-wrap" }}>
              {`${elem.teams.away}\nat\n${elem.teams.home}`}
            </td>
            <td className="width60">{elem.notes}</td>
            <td className="width5">{elem.rating}/10</td>
          </tr>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            backgroundColor: "none",
          }}
        >
          <button className="editDel">Edit</button>
          <button className="editDel">Delete</button>
        </div>
      </div>
    ));
    return visitsArr;
  }

  render() {
    return <div id="listContainer">{this.listVisits()}</div>;
  }
}
