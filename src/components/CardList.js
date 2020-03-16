import React from "react";

const CardList = () => {
  return (
    <div>
      <div className="card-item">
        <div className="clash-card">
          <div className="clash-card__image clash-card__image--archer">
            <img className="country-symbol" />
          </div>
          <div className="clash-card__level clash-card__level--archer"></div>
          <div className="clash-card__unit-name"></div>
          <div className="clash-card__unit-description">
            <dd></dd>Cases
          </div>

          <div className="clash-card__unit-stats clash-card__unit-stats--archer clearfix">
            <div className="one-third">
              <div className="stat"></div>
              <div className="stat-value">Active</div>
            </div>

            <div className="one-third">
              <div className="stat"></div>
              <div className="stat-value">Deaths</div>
            </div>

            <div className="one-third">
              <div className="stat"></div>
              <div className="stat-value">Recovered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
