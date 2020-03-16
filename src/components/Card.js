import React, { useEffect } from "react";
import CardList from "./CardList";
import { connect } from "react-redux";
import { fetchDataCorona } from "../actions/index";
import Spinner from "./Spinners";
const Card = ({ corona: { dataCorona, loading }, fetchDataCorona }) => {
  useEffect(() => {
    fetchDataCorona();

    //eslint-disable-next-line
  }, []);

  if (loading || dataCorona === null) {
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
