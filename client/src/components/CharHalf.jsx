import React from "react";

export default function CharHalf(props) {
  const urlEnd = props.match.params.id;

  return (
    <div>
      <h1>{urlEnd}</h1>
    </div>
  );
}
