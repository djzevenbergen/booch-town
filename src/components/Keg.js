import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>Name: {props.name}</h3>
        {/* - Type: {props.type} */}
        {/* <p><em>Level: {props.level}</em></p>
        <p><em>Location: {props.location} </em></p>
        <p><em>Description: {props.description} </em></p> */}
        <hr />
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number,
  location: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};


export default Keg;