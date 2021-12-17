import React from "react";


export default function CharHalf(props) {


  const charId = props.match.params.id;


  return (
    <div>
      <h1>{charId}</h1>
    </div>
  );
}
