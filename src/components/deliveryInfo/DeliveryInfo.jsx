import React from "react";
import check from "../../assets/circle-check-regular.svg";

function DeliverySection({ canDeliver }) {
  return (
    <div className="delivery-info">
      <p className="header-1">
        Delivery <img src={check} alt="" />
      </p>
      <p className="header-2">Mobile Entry - Free</p>
      <p className="caption">
        Tickets Available by Sun Apr 3, 2022 <br /> These mobile tickets will be
        transferred directly to you from a trusted seller We'll email you
        instructions on how to accept them on the original ticket provider's
        mobile app.
      </p>
    </div>
  );
}

export default DeliverySection;
