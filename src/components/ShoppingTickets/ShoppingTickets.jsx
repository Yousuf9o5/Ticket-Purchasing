import React from "react";
import { UserShopList } from "../../atom/atom";
import { useRecoilState } from "recoil";

function ShoppingTickets() {
  const [shop, setShop] = useRecoilState(UserShopList);

  const shopping = (name, price, quantity, fee, delivery) => {
    let founded = shop.find((item) => {
      if (name == item.name) {
        return true;
      }
    });

    if (founded) {
      const newData = shop.map((item) => {
        if (item.name === name) {
          const newQuantity = item.quantity + 1;
          const newTotal =
            newQuantity * price + item.fee * newQuantity + item.delivery;
          if (newQuantity === 1) {
            return {
              ...item,
              name: name,
              price: price,
              quantity: newQuantity,
              fee: fee,
              delivery: delivery,
              total: price * quantity + fee + delivery,
            };
          }

          return {
            ...item,
            price: price,
            quantity: item.quantity + 1,
            total: newTotal,
          };
        } else {
          return item;
        }
      });

      return setShop([...newData]);
    }

    const data = {
      name: name,
      price: price,
      quantity: quantity,
      fee: fee,
      delivery: delivery,
      total: price * quantity + fee + delivery,
    };

    setShop([...shop, data]);
  };

  const decreaseQuantity = (name) => {
    let founded = shop.find((item) => {
      if (name == item.name) {
        return true;
      }
    });

    if (!founded) {
      return;
    }

    const newData = shop.map((item) => {
      if (item.name === name) {
        const newQuantity = item.quantity - 1 <= 0 ? 0 : item.quantity - 1;
        const newPrice = newQuantity <= 0 ? 0 : item.price;
        const newTotal =
          newQuantity * newPrice + item.fee * newQuantity + item.delivery;

        if (newQuantity === 0) {
          return {
            ...item,
            name: name,
            price: 0,
            quantity: 0,
            fee: 0,
            delivery: 0,
            total: 0,
          };
        }

        return {
          ...item,
          quantity: newQuantity,
          price: newPrice,
          total: newTotal,
        };
      }

      return item;
    });

    return setShop([...newData]);
  };

  return (
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div className="col mb-5">
          <div className="card h-100">
            <img
              className="card-img-top"
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="..."
            />
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">Tickets 1</h5>
                <h6 className="fw-bolder">
                  {shop.map((item) => {
                    if (item.name === "ticket 1") {
                      return item.quantity + "x";
                    }
                  })}
                </h6>
                <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                </div>
                $40.00
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => shopping("ticket 1", 40.0, 1, 2.34, 12.3)}
                >
                  Add to cart
                </button>
                <button
                  className="btn btn-outline-dark mt-auto mx-2"
                  onClick={() => decreaseQuantity("ticket 1")}
                >
                  remove
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100">
            <img
              className="card-img-top"
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="..."
            />
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">Tickets 2</h5>
                <h6 className="fw-bolder">
                  {shop.map((item) => {
                    if (item.name === "ticket 2") {
                      return item.quantity + "x";
                    }
                  })}
                </h6>
                <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                </div>
                <span className="text-muted text-decoration-line-through">
                  $20.00
                </span>
                $18.00
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => shopping("ticket 2", 18.0, 1, 1.45, 5.3)}
                >
                  Add to cart
                </button>
                <button
                  className="btn btn-outline-dark mt-auto mx-2"
                  onClick={() => decreaseQuantity("ticket 2")}
                >
                  remove
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100">
            <img
              className="card-img-top"
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="..."
            />
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">Tickets 3</h5>
                <h6 className="fw-bolder">
                  {shop.map((item) => {
                    if (item.name === "ticket 3") {
                      return item.quantity + "x";
                    }
                  })}
                </h6>
                <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                </div>
                $60.00
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => shopping("ticket 3", 60.0, 1, 3.44, 6.2)}
                >
                  Add to cart
                </button>
                <button
                  className="btn btn-outline-dark mt-auto mx-2"
                  onClick={() => decreaseQuantity("ticket 3")}
                >
                  remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingTickets;
