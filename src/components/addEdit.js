import React from "react";

export default function addEdit(props) {
  return (
    <div className="addEdit">
      <div className="flexRow aeHeader" style={{ alignItems: "center" }}>
        <h4 style={{ position: "absolute", left: "calc(50% - 55px)" }}>
          Add/Edit
        </h4>
        <button
          onClick={() => {
            props.addVisit(props.userInput);
            props.toggleAdd();
          }}
          style={{
            height: "90",
            width: "50px",
            position: "absolute",
            right: "5px",
          }}
        >
          Save
        </button>
      </div>
      <div
        className="flexRow"
        style={{ justifyContent: "space-around", marginTop: "10px" }}
      >
        <div className="flexCol" style={{ justifyContent: "space-between" }}>
          <h5>Park name</h5>
          <select
            value={props.userInput.parkName}
            onChange={(ev) => props.updateUI(`parkName`, ev.target.value)}
          >
            <option value="MLB Ballparks">MLB Ballparks</option>
            <option value="Camden Yards">Camden Yards</option>
            <option value="Fenway Park">Fenway Park</option>
            <option value="Yankee Stadium">Yankee Stadium</option>
            <option value="Tropicana Field">Tropicana Field</option>
            <option value="Rogers Centre">Rogers Centre</option>
            <option value="Marlins Park">Marlins Park</option>
            <option value="SunTrust Park">SunTrust Park</option>
            <option value="Citi Field">Citi Field</option>
            <option value="Citizens Bank Park">Citizens Bank Park</option>
            <option value="Nationals Park">Nationals Park</option>
            <option value="Wrigley Field">Wrigley Field</option>
            <option value="Great American Ballpark">
              Great American Ballpark
            </option>
            <option value="Miller Park">Miller Park</option>
            <option value="PNC Park">PNC Park</option>
            <option value="Busch Stadium">Busch Stadium</option>
            <option value="Guaranteed Rate Field">Guaranteed Rate Field</option>
            <option value="Progressive Field">Progressive Field</option>
            <option value="Comerica Park">Comerica Park</option>
            <option value="Kauffman Stadium">Kauffman Stadium</option>
            <option value="Target Field">Target Field</option>
            <option value="Minute Maid Park">Minute Maid Park</option>
            <option value="Angels Stadium">Angels Stadium</option>
            <option value="Oakland Coliseum">Oakland Coliseum</option>
            <option value="Safeco Field">Safeco Field</option>
            <option value="Globe Life Park">Globe Life Park</option>
            <option value="Chase Field">Chase Field</option>
            <option value="Coors Field">Coors Field</option>
            <option value="Dodgers Stadium">Dodgers Stadium</option>
            <option value="Petco Park">Petco Park</option>
            <option value={`AT&T Park`}>{`AT&T Park`}</option>
          </select>
        </div>
        <div className="dateBox">
          <h5 style={{ paddingBottom: "3px" }}>Date</h5>
          <div className="flexRow">
            <div>
              <h6>MM</h6>
              <input
                value={props.userInput.date.month}
                onChange={(ev) => props.updateUI(`month`, ev.target.value)}
                style={{ width: "30px", textAlign: "center" }}
              />
            </div>
            <div style={{ padding: "0 5px" }}>
              <h6>DD</h6>
              <input
                value={props.userInput.date.day}
                onChange={(ev) => props.updateUI(`day`, ev.target.value)}
                style={{
                  width: "30px",
                  textAlign: "center",
                }}
              />
            </div>
            <div>
              <h6>YYYY</h6>
              <input
                value={props.userInput.date.year}
                onChange={(ev) => props.updateUI(`year`, ev.target.value)}
                style={{ width: "50px", textAlign: "center" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="flexRow"
        style={{ justifyContent: "space-around", marginTop: "15px" }}
      >
        <div>
          <h5 style={{ marginBottom: "5px" }}>Home Team</h5>
          <input
            value={props.userInput.teams.home}
            onChange={(ev) => props.updateUI(`home`, ev.target.value)}
            style={{ width: "150px" }}
          />
        </div>
        <div>
          <h5 style={{ marginBottom: "5px" }}>Away Team</h5>
          <input
            value={props.userInput.teams.away}
            onChange={(ev) => props.updateUI(`away`, ev.target.value)}
            style={{ width: "150px" }}
          />
        </div>
        <div>
          <h5 style={{ marginBottom: "5px" }}>Rating</h5>
          <input
            value={props.userInput.rating}
            onChange={(ev) => props.updateUI(`rating`, ev.target.value)}
            style={{ width: "30px" }}
          />
        </div>
      </div>
      <div>
        <h5 style={{ marginTop: "15px", marginBottom: "5px" }}>Notes</h5>
        <textarea
          value={props.userInput.notes}
          onChange={(ev) => props.updateUI(`notes`, ev.target.value)}
          style={{
            width: "90%",
            height: "180px",
          }}
        />
      </div>
    </div>
  );
}
