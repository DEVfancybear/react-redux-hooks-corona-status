import React, { useEffect, useState } from "react";

const CardList = ({ dataCorona: { attributes }, listImage }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(listImage());
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className="card-item">
        <div className="clash-card">
          <div className="clash-card__image clash-card__image--archer">
            {/* <img className="country-symbol" src={listImage.url} /> */}
            {/* {listImage} */}
            <img className="country-symbol" alt="corona" src={list.url} />
          </div>
          <div className="clash-card__level clash-card__level--archer"></div>
          <div className="clash-card__unit-name">
            {attributes.Country_Region}
          </div>
          <div className="clash-card__unit-description">
            <dd>{attributes.Confirmed}</dd>Cases
          </div>

          <div className="clash-card__unit-stats clash-card__unit-stats--archer clearfix">
            <div className="one-third">
              <div className="stat">{attributes.Active}</div>
              <div className="stat-value">Active</div>
            </div>

            <div className="one-third">
              <div className="stat">{attributes.Deaths}</div>
              <div className="stat-value">Deaths</div>
            </div>

            <div className="one-third">
              <div className="stat">{attributes.Recovered}</div>
              <div className="stat-value">Recovered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
