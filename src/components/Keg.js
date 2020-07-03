import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  let classType = "";
  if (props.price < 5) {
    classType = "cheap";
  } else if (props.price >= 5 && props.price < 10) {
    classType = "medium";
  } else {
    classType = "expensive";
  }

  return (
    <React.Fragment>

      <h3>{props.name} - <span className={classType}>{props.price}</span></h3>
      <h3>{props.capacity} pints left, there's {props.howMuchLeft} left!</h3>
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
  capacity: PropTypes.number,
  howMuchLeft: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  onClickingEditCapacity: PropTypes.func
};


export default Keg;