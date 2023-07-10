import React from "react";
import DeliveryInfo from "../deliveryInfo/DeliveryInfo";
import TotalSection from "../totalSection/TotalSection";
import PaymentSelection from "../PaymentSelection/PaymentSelection";
import ShoppingTickets from "../ShoppingTickets/ShoppingTickets";

// export const cards = [
//   {
//     name: "card 1",
//     number: "8493051734593",
//     expireDate: new Date("2023/10/30"),
//     securityCode: "315",
//     postal code if needed
//     zipCode: "10001",
//   },
//   {
//     name: "card 1",
//     number: "9375038493241",
//     expireDate: new Date("2023/8/24"),
//     securityCode: "532",
//     postal code if needed
//     zipCode: "10001",
//   },
//   {
//     name: "card 1",
//     number: "9481058343145",
//     expireDate: new Date("2023/10/20"),
//     securityCode: "423",
//     postal code if needed
//     zipCode: "10001",
//   },
// ];

function PaymentSection() {
  return (
    <>
      <ShoppingTickets />

      <div className="container payment-section">
        <DeliveryInfo />

        <PaymentSelection />

        <TotalSection />
      </div>
    </>
  );
}

export default PaymentSection;
