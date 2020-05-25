import React from "react";
import AddEdit from "./addEdit";

export default function ListRows(props) {
  const visitsArr = props.parkVisits.map((elem) => (
    <div
      key={elem.id}
      style={{ display: "flex", height: "20%", width: "calc(100% + 55px)" }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          width: `60vw`,
        }}
      >
        <tr key={elem.id} className="visitRow">
          <td className="width15 parkInfo" style={{ margin: "3px 0" }}>
            <div style={{ marginBottom: "3px" }}>{`${elem.parkName}`}</div>
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
        <button
          className="editDel"
          onClick={() => {
            props.toggle();
            props.handleUpdate(elem);
          }}
        >
          Edit
        </button>
        <button className="editDel" onClick={() => props.deleteVisit(elem.id)}>
          Delete
        </button>
      </div>
      <div
        className="addEditBox"
        style={!props.isEditing ? { display: "none" } : { display: "flex" }}
      >
        <AddEdit
          userInput={props.userInput}
          updateUI={props.updateUI}
          updateVisit={props.updateVisit}
          toggle={props.toggle}
          sortList={props.sortList}
        />
      </div>
    </div>
  ));
  return visitsArr;
}
