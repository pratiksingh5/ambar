import React from "react";
import "./Shows.css";
import firstCardImg from "../../Assets/card1.png";
import secondCardImg from "../../Assets/card2.png";
import thirdCardImg from "../../Assets/card3.png";
import forthCardImg from "../../Assets/card4.png";

const Shows = () => {
  return (
    <>
      <div className="cards">
        <div class="showsCard">
          <img src={firstCardImg} class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">Folk</h5>
            <p class="card-text">Benny Dayal</p>
            <div className="buttons">
              <a href="#" class="btn btn-primary">
                More Info ➡
              </a>
              <i class="ri-coupon-3-line"></i>
            </div>
          </div>
        </div>
        <div class="showsCard">
          <img src={secondCardImg} class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">Bollywood</h5>
            <p class="card-text">Vijay Yesudas</p>
            <div className="buttons">
              <a href="#" class="btn btn-primary">
                More Info ➡
              </a>
              <i class="ri-coupon-3-line"></i>
            </div>
          </div>
        </div>
        <div class="showsCard">
          <img src={thirdCardImg} class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">Folk</h5>
            <p class="card-text">Andrea Jeremiah</p>
            <div className="buttons">
              <a href="#" class="btn btn-primary">
                More Info ➡
              </a>
              <i class="ri-coupon-3-line"></i>
            </div>
          </div>
        </div>
        <div class="showsCard">
          <img src={forthCardImg} class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">Folk</h5>
            <p class="card-text">Shilpa Rao</p>
            <div className="buttons">
              <a href="#" class="btn btn-primary">
                More Info ➡
              </a>
              <i class="ri-coupon-3-line"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shows;
