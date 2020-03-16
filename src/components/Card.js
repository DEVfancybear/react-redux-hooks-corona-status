import React, { useEffect } from "react";
import CardList from "./CardList";
import { connect } from "react-redux";
import { fetchDataCorona, fetchDataListsImages } from "../actions/index";
const Card = ({
  corona: { dataCorona, dataImages },
  fetchDataCorona,
  fetchDataListsImages
}) => {
  useEffect(() => {
    fetchDataCorona();
    fetchDataListsImages();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="card-list">
        {/* {dataImages.map(item=> {
       return <CardList data={item}/>
     })} */}
        {console.log(dataCorona, dataImages)}
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
