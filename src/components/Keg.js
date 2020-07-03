import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>Name: {props.name}</h3>
        <h3>Pints Left : {props.capacity} </h3>
        <button onClick={() => onClickingEditCapacity(props.id)}>Delete Entry</button>
        <hr />
      </div>
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