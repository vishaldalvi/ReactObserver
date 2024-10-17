import React from "react";

const APIDisplay = ({ data }) => {
  return (
    <div>
      <h3>API Data:</h3>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default APIDisplay;
