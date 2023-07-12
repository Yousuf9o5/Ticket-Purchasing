import React, { useState } from "react";
import { UserShopList, chosenCard } from "../../atom/atom";
import { useRecoilState } from "recoil";

function TotalSection() {
  const [shop, setShop] = useRecoilState(UserShopList);
  const [card, setCard] = useRecoilState(chosenCard);

  const [isChecked, setChecked] = useState(false);
  const totalPrice = shop.reduce((acc, { total }) => total + acc, 0);
  const totalDelivery = shop.reduce(
    (acc, { delivery }) => delivery + parseFloat(acc),
    0
  );

  const submit = () => {
    if (!isChecked) {
      return alert("must read terms");
    }

    if (!shop || shop.length === 0) {
      return alert(`your cart is empty`);
    }

    if (!card) {
      return alert("chose or add payment method");
    }

    if (totalPrice > card.balance) {
      console.log(card.balance);
      return alert(`your balance is low 🙄 ${card.balance} (feel you bro) `);
    }

    return alert("purchase done");
  };

  const handleCancel = () => {
    setShop([]);
  };

  return (
    <div className="total-section">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="header-container">
                <p className="m-0">Total</p>
                <p className="m-0">{totalPrice.toFixed(2)}$</p>
              </div>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="tickets-info">
                <p className="header">Tickets:</p>
                {shop?.map((item, i) => (
                  <div className="price-info" key={i}>
                    <p>
                      Resale Tickets:{item.name} x {item.quantity}
                    </p>
                    <p className="price">
                      {(item.price * item.quantity).toFixed(2)}$
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <p className="header">Note From Seller:</p>
                <p className="price">-....-</p>
              </div>
              <div>
                <p className="header">Fees:</p>
                <div className="price-info d-flex flex-column">
                  <p>Order Processing Fee</p>
                  {shop?.map((item, i) => (
                    <div className="d-flex" key={i}>
                      <p>Fee:&nbsp; </p>
                      <p className="price">
                        {item.fee.toFixed(2)}$ x {item.quantity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="header">Delivery:</p>
                <div className="price-info">
                  <p>Mobile Entry:</p>
                  <p className="price">{totalDelivery.toFixed(2)}$</p>
                </div>
              </div>
              <button className="cancel-order" onClick={handleCancel}>
                Cancel Order
              </button>
              <div>
                <p>*All Sales Final - No Refunds</p>
                <div className="read-terms">
                  <input
                    type="checkbox"
                    onChange={(e) => setChecked(!isChecked)}
                    value={isChecked}
                  />
                  <p className="m-0">
                    I have read and agree to the current
                    <a href="#">Terms of Use.</a>
                  </p>
                </div>
              </div>
              <button className="place-order" onClick={submit}>
                Place Order
              </button>
              <p className="last-p">
                *Exceptions may apply. see our Terms of Use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalSection;
