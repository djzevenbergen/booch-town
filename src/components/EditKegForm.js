import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditLogForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({ name: event.target.name.value, location: event.target.location.value, type: event.target.type.value, description: event.target.description.value, level: event.target.level.value, id: keg.id });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
}

export default EditKegForm;