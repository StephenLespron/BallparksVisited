import React from "react";

export default function ListHeader() {
  return (
    <tr className="TableHeader">
      <th className="width15">Ballpark</th>
      <th className="width10">Date</th>
      <th className="width10">Teams</th>
      <th className="width60">Notes</th>
      <th className="width5">Rating</th>
    </tr>
  );
}
