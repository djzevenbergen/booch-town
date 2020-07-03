import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>

      <h3>Name: {props.name}</h3>
      <h3>Pints Left : {props.capacity} </h3>
      <button onClick={() => props.whenKegClicked(props.id)}>Keg Details</button>
      <button onClick={() => props.onClickingEditCapacity(props.id)}>Pull Pint</button>
      <hr />

    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  flavor: PropTypes.string,
  capacity: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  onClickingEditCapacity: PropTypes.func
};


export default Keg;