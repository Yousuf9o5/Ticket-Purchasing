import React, { useState } from "react";
import check from "../../assets/circle-check-regular.svg";
import MyCards from "../MyCardsLayout/MyCards";
import plus from "../../assets/plus-solid.svg";
import card2 from "../../assets/Card 2.svg";
import AddCardForm from "../AddCardForm/AddCardForm";
import { useRecoilState } from "recoil";
import { UserCardsList } from "../../atom/atom";

function PaymentSelection() {
  const [userCards, setUserCard] = useRecoilState(UserCardsList);
  const [addCard, setAddCard] = useState(false);

  return (
    <div className="payment-selection">
      <p className="header-1">
        Payment <img src={check} alt="check" className="check" />
      </p>
      <p className="selection-header">Use Credit / Debit Card</p>
      <div className="card-selection">
        <MyCards />
        {addCard ? (
          <AddCardForm addCard={addCard} setAdd={setAddCard} />
        ) : (
          <></>
        )}
      </div>

      <div className="add-section" onClick={() => setAddCard(!addCard)}>
        <img src={plus} alt="plus" />
        <img src={card2} alt="card" />
        <p className="">Add New Card</p>
      </div>

      <hr />
      <p className="header-2">Or Pay With</p>
      <p className="caption">
        By using a digital wallet and continuing past this page, you have read
        and are accepting the <a href="#">Terms Of Use.</a>
      </p>
    </div>
  );
}

export default PaymentSelection;
