import React from "react"

const AffButton = ({ affText, onClick}) => (
  <button onClick={onClick}> {`${affText}`}</button>
);

export default AffButton
