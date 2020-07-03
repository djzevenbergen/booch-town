import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function NewKegForm(props) {
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Submit Pokemans" />
    </React.Fragment>
  );
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({ name: event.target.name.value, location: event.target.location.value, type: event.target.type.value, level: event.target.level.value, description: event.target.description.value, id: v4() });
  }
}
NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;