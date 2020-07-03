import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";
import KegDetail from './KegDetail';


function KegList(props) {
  return (
    <React.Fragment>
      {props.kegList.map((keg) =>
        <Keg
          whenKegClicked={props.onKegSelection}
          name={keg.name}
          type={keg.type}
          location={keg.location}
          level={keg.level}
          description={keg.description}
          id={keg.id}
          key={keg.id} />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;