import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Details</h1>
      <h3>Name: {keg.name}</h3>
      <p>Type: {keg.type}</p>
      <p>Level: {keg.level}</p>
      <p>Location: {keg.location}</p>
      <p>Description: {keg.description}</p>
      <button onClick={props.onClickingEdit}>Update Entry</button>
      <button onClick={() => onClickingDelete(keg.id)}>Delete Entry</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;