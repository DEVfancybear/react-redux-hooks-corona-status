import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import { connect } from "react-redux";
import { fetchDataCorona, fetchDataListsImages } from "../actions/index";
import Spinner from "./Spinners";
const Card = ({
  corona: { dataCorona, dataImages, loading },
  fetchDataCorona,
  fetchDataListsImages
}) => {
  useEffect(() => {
    fetchDataCorona();
    fetchDataListsImages();
    //eslint-disable-next-line
  }, []);

  if (loading || dataCorona === null || dataImages === null) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="card-list">
        {dataCorona.features.map((item, index) => {
          console.log(item.attributes);
          return <CardList key={index} dataCorona={item} />;
        })}

        {/* {console.log(dataCorona.features, dataImages)} */}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    corona: state.corona
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchDataCorona: () => {
      dispatch(fetchDataCorona());
    },
    fetchDataListsImages: () => {
      dispatch(fetchDataListsImages());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
