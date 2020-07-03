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
      passedBrand = props.keg.brand;
    }

    if (event.target.price.value != "") {
      passedPrice = event.target.price.value;
    } else {
      passedPrice = props.keg.price;
    }

    if (event.target.flavor.value != "") {
      passedFlavor = event.target.flavor.value;
    } else {
      passedFlavor = props.keg.flavor;
    }

    props.onEditKeg({ name: passedName, brand: passedBrand, price: passedPrice, flavor: passedFlavor, capacity: props.keg.capacity, id: keg.id });
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