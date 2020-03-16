import React from "react";

const CardList = () => {
  return (
    <div>
      <div class="card-item">
        <div class="clash-card">
          <div class="clash-card__image clash-card__image--archer">
            <img class="country-symbol" />
          </div>
          <div class="clash-card__level clash-card__level--archer"></div>
          <div class="clash-card__unit-name"></div>
          <div class="clash-card__unit-description">
            <dd></dd>Cases
          </div>

          <div class="clash-card__unit-stats clash-card__unit-stats--archer clearfix">
            <div class="one-third">
              <div class="stat"></div>
              <div class="stat-value">Active</div>
            </div>

            <div class="one-third">
              <div class="stat"></div>
              <div class="stat-value">Deaths</div>
            </div>

            <div class="one-third">
              <div class="stat"></div>
              <div class="stat-value">Recovered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
