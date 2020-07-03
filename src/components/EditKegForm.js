import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    let passedName;
    let passedBrand;
    let passedPrice;
    let passedFlavor;
    let passedCapacity;

    //console.log(props.keg.name);

    if (event.target.name.value != "") {
      passedName = event.target.name.value;
      //console.log(event.target.name.value);
    } else {
      passedName = props.keg.name;
      // console.log(passedName);
    }

    if (event.target.brand.value != "") {
      passedBrand = event.target.brand.value;
    } else {
      passedBrand = props.brand;
    }



    props.onEditKeg({ name: passedName, brand: passedBrand, price: event.target.price.value, flavor: event.target.flavor.value, capacity: event.target.capacity.value, id: keg.id });
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