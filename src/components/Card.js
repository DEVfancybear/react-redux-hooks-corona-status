import React, { useEffect } from "react";
import CardList from "./CardList";
import { connect } from "react-redux";
import { fetchDataCorona, fetchDataListsImages } from "../actions/index";
import Spinner from "./Spinners";
const Card = ({
  corona: { dataCorona, loading, dataImages },
  fetchDataCorona,
  fetchDataListsImages
}) => {
  useEffect(() => {
    fetchDataCorona();
    fetchDataListsImages();
    //eslint-disable-next-line
  }, []);

  if (loading || dataCorona === null) {
    return <Spinner />;
  }
  // const listImage = (
  //   <div>
  //     {dataImages.map(image => {
  //       return <img className="country-symbol" src={image.url} />;
  //     })}
  //   </div>
  // );

  const listImage = () => {
    let a = dataImages[Math.floor(Math.random() * dataImages.length)];
    console.log(a);
    return a;
  };
  return (
    <div>
      <div className="card-list">
        {dataCorona.features.map((item, index) => {
          console.log(item.attributes);
          return (
            <CardList key={index} dataCorona={item} listImage={listImage} />
          );
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
