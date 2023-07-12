import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { UserCardsList } from "../../atom/atom";

function AddCardForm({ setAdd, addCard }) {
  const [userCards, setUserCards] = useRecoilState(UserCardsList);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expire, setExpire] = useState("");
  const [security, setSecurity] = useState("");
  const [code, setCode] = useState("");
  const [cardType, setCardType] = useState("");
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (
      !/^\d*$/.test(number) ||
      !expire.includes("/") ||
      !/^\d*$/.test(security)
    ) {
      setErr(true);
    } else {
      setErr(false);
    }

    if (number[0] == 4) {
      setCardType("visa");
    }

    if (+(number[0] + number[1]) >= 51 && +(number[0] + number[1]) <= 55) {
      setCardType("Mastercard");
    } else {
      setCardType("");
    }
  }, [number, expire]);

  const expireValidation = () => {
    if (expire != 0 && expire.length === 5) {
      if (expire.includes("/")) {
        return +expire.split("/")[0] <= 12 ? "" : "Enter Valid date";
      }
    }
  };

  const submit = () => {
    if (err) {
      return;
    }

    /*
    
    Visa:
      Starts with the digit 4.
      Length: 16 digits.

    Mastercard:
      Starts with digits 51, 52, 53, 54, or 55.
      Length: 16 digits.

    */

    if (!cardType || cardType.length === 0) {
      return alert("Invalid Card");
    }

    const data = {
      id: userCards.length + 1,
      name: name,
      type: cardType,
      number: number,
      expire: expire,
      security: security,
      code: code,
      checked: false,
      balance: Math.ceil(Math.random() * 500),
    };

    setName("");
    setCardType("");
    setNumber("");
    setExpire("");
    setSecurity("");
    setCode("");
    setAdd(false);
    console.log(addCard);
    alert(`your balance is ${data.balance} 🙄`);

    return setUserCards([...userCards, data]);
  };

  const closeForm = () => {
    setName("");
    setCardType("");
    setNumber("");
    setExpire("");
    setSecurity("");
    setCode("");
    setAdd(false);
  };

  return (
    <div className="add-form">
      <div className="">
        <p>Card Name</p>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="">
        <p>Card Number</p>
        <input
          type="text"
          className="form-control"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <p className="validation">
          {number.length <= 16 && /^\d*$/.test(number)
            ? ""
            : "Enter Valid Card Number"}
        </p>
      </div>
      <div className="">
        <p>Card Code</p>
        <input
          type="text"
          className="form-control"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <p className="validation">
          {code.length <= 4 && /^\d*$/.test(number)
            ? ""
            : "Enter Valid Card Number"}
        </p>
      </div>
      <div className="d-flex w-100">
        <div className="w-50">
          <p>Expiry date</p>
          <input
            type="text"
            placeholder="MM/YY"
            className="form-control date"
            value={expire}
            onChange={(e) => setExpire(e.target.value)}
          />
          <p className="validation">{expireValidation()}</p>
        </div>
        <div className="w-50">
          <p>Security Code</p>
          <input
            type="password"
            className="form-control code"
            value={security}
            onChange={(e) => setSecurity(e.target.value)}
          />
          <p className="validation">
            {security.length <= 3 && /^\d*$/.test(security)
              ? ""
              : "Enter Valid Card Number"}
          </p>
        </div>
      </div>
      <div>
        <button className="add-card" onClick={submit}>
          Add Card
        </button>
        <button className="cancel-btn" onClick={closeForm}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddCardForm;
