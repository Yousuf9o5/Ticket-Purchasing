import React, { useEffect, useState } from "react";
import visa from "../../assets/visa.png";
import masterCard from "../../assets/card.png";
import cardSvg from "../../assets/Card.svg";
import check from "../../assets/circle-check-regular.svg";
import notCheck from "../../assets/circle-xmark-regular.svg";
import { useRecoilState } from "recoil";
import { UserCardsList, chosenCard } from "../../atom/atom";

function MyCards() {
  const [userCards, setUserCards] = useRecoilState(UserCardsList);
  const [card, setCard] = useRecoilState(chosenCard);
  const [passes, setPasses] = useState([]);

  const deleteCard = (id) => {
    let newData = userCards.filter((item) => item.id !== id);
    setUserCards(newData);
  };

  const data = {
    visa: visa,
  };

  const handlePassChange = (index, value) => {
    setPasses((prevPasses) => {
      const updatedPasses = [...prevPasses];
      updatedPasses[index] = value;
      return updatedPasses;
    });
  };

  const submitCard = (comingItem, i) => {
    if (userCards[i].security !== passes[i]) {
      return alert("wrong security code");
    }

    const newData = userCards.map((item) => {
      if (comingItem.number == item.number) {
        return (item = { ...item, checked: !item.checked });
      } else {
        return (item = { ...item, checked: false });
      }
    });

    setUserCards([...newData]);
    setCard(comingItem);
  };

  return userCards.map((item, i) => {
    const pass = passes[i] || "";

    const checking = () => {
      return pass === item.security ? check : notCheck;
    };
    return (
      <div
        className={`my-cards ${item.checked ? "my-cards-active" : ""}`}
        key={i}
      >
        <div className="radio-container">
          <input
            type="radio"
            name="card"
            onChange={() => submitCard(item, i)}
            checked={item.checked}
          />
        </div>
        <div>
          <div className="card-info">
            <img
              src={data[item.type] || masterCard}
              alt="visa"
              loading="lazy"
              className="card-type"
            />
            <div>
              <p>
                {item.type.toUpperCase()} - {item.code}
              </p>
              <p className="m-0">Balance: {item.balance} $</p>
              <p className="font-transparent">
                {item.name} | {item.expire}
              </p>
              <div className="d-flex gap-1">
                {/* <button>Edit</button> <p className="font-transparent">|</p> */}
                <button onClick={() => deleteCard(item.id)}>Delete</button>
              </div>
            </div>
          </div>
          <div className="check-security">
            <p className="security-text">Security Code</p>
            <div className="check-input">
              <div className="input-field">
                <input
                  type="password"
                  onChange={(e) => handlePassChange(i, e.target.value)}
                  value={pass}
                />
                <img
                  src={checking()}
                  alt="card"
                  className={pass?.length > 2 ? "opacity-1" : "opacity-0"}
                />
              </div>
              <img src={cardSvg} alt="card" />
              <p className="m-0">3-digits on back Of card</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default MyCards;
