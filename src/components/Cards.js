import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out our Services below</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-6.jpg"
              text="Check out our State-of-the-Art Equipment"
              label="Equipment"
              path="/equipment"
            />
            <CardItem
              src="images/img-2.jpg"
              text="See all of our Services that we provide"
              label="Services"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-4.jpg"
              text="Need help finding the right Chemicals? We've got you covered"
              label="Chemicals"
              path="/chemicals"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Contact Us Today to get a Free Quote"
              label="Contact Us"
              path="/contact-us"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
