import { useState, useContext, useEffect } from "react";
import CheckoutItem from "./CheckoutItem";
import { LangContext, CartContext } from "./LangContext.JSX";
export default function Checkout() {
  const { lang, trasnaltions } = useContext(LangContext);
  const {
    itemsList,
    addToCart,
    cart,
    total,
    stetotal,
    totalPrice,
    value,
    setValue,
  } = useContext(CartContext);
  return (
    <>
      <div className="container" style={{ marginTop: "10rem" }}>
        <div className="col-md-12">
          <h1 className="fw-bold">{trasnaltions[lang].Checkout}</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p className="fw-bold">{trasnaltions[lang].Billingdetails}</p>
            <form action="">
              <div className="row">
                <div className="col-md-6">
                  <label style={{ fontWeight: "600" }} htmlFor="">
                    {trasnaltions[lang].FirstName}
                  </label>
                  <input
                    type="text"
                    style={{
                      border: "none",
                      backgroundColor: "#F9FAFB",
                      color: "#576471",
                    }}
                    className=" mt-3 form-chek w-100 p-2 px-3 rounded-3"
                    name=""
                    id=""
                  />
                </div>
                <div className="col-md-6">
                  <label style={{ fontWeight: "600" }} htmlFor="">
                    {trasnaltions[lang].LastName}
                  </label>
                  <input
                    type="text"
                    style={{
                      border: "none",
                      backgroundColor: "#F9FAFB",
                      color: "#576471",
                    }}
                    className=" mt-3 form-chek w-100 p-2 px-3 rounded-3"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="col-md-12 mt-3">
                <label style={{ fontWeight: "600" }} htmlFor="">
                  {trasnaltions[lang].Company}
                </label>
                <input
                  type="text"
                  style={{
                    border: "none",
                    backgroundColor: "#F9FAFB",
                    color: "#576471",
                  }}
                  className=" form-chek w-100 p-2 px-3 rounded-3 mt-3"
                  name=""
                  id=""
                />
              </div>

              <div className="col-md-12 mt-3">
                <label style={{ fontWeight: "600" }} htmlFor="">
                  {trasnaltions[lang].Streetaddress}
                </label>
                <input
                  placeholder={trasnaltions[lang].Streetaddresspl1}
                  type="text"
                  style={{
                    border: "none",
                    backgroundColor: "#F9FAFB",
                    color: "#576471",
                  }}
                  className=" form-chek w-100 p-2 px-3 rounded-3 mt-3"
                  name=""
                  id=""
                />
                <input
                  placeholder={trasnaltions[lang].Streetaddresspl2}
                  type="text"
                  style={{
                    border: "none",
                    backgroundColor: "#F9FAFB",
                    color: "#576471",
                  }}
                  className=" form-chek w-100 p-2 px-3 rounded-3 mt-3"
                  name=""
                  id=""
                />
              </div>
              <div className="col-md-12 mt-3">
                <label style={{ fontWeight: "600" }} htmlFor="">
                  {trasnaltions[lang].TownCity}
                </label>
                <input
                  type="text"
                  style={{
                    border: "none",
                    backgroundColor: "#F9FAFB",
                    color: "#576471",
                  }}
                  className=" form-chek w-100 p-2 px-3 rounded-3 mt-3"
                  name=""
                  id=""
                />
              </div>

              <div className="col-md-12 mt-3">
                <label style={{ fontWeight: "600" }} htmlFor="">
                  {trasnaltions[lang].PostcodeZIP}
                </label>
                <input
                  type="number"
                  style={{
                    border: "none",
                    backgroundColor: "#F9FAFB",
                    color: "#576471",
                  }}
                  className=" form-chek w-100 p-2 px-3 rounded-3 mt-3"
                  name=""
                  id=""
                />
              </div>
              <div className="col-md-12 mt-3">
                <label style={{ fontWeight: "600" }} htmlFor="">
                  {trasnaltions[lang].Phone}
                </label>
                <input
                  type="tel"
                  style={{
                    border: "none",
                    backgroundColor: "#F9FAFB",
                    color: "#576471",
                  }}
                  className=" form-chek w-100 p-2 px-3 rounded-3 mt-3"
                  name=""
                  id=""
                />
              </div>
              <div className="col-md-12 mt-3">
                <label style={{ fontWeight: "600" }} htmlFor="">
                  {trasnaltions[lang].Emailaddress}
                </label>
                <input
                  type="email"
                  style={{
                    border: "none",
                    backgroundColor: "#F9FAFB",
                    color: "#576471",
                  }}
                  className=" form-chek w-100 p-2 px-3 rounded-3 mt-3"
                  name=""
                  id=""
                />
              </div>
              <div className="col-md-12 mt-3">
                <h1 className="fs-5 fw-bold">
                  {trasnaltions[lang].Additionalinformation}
                </h1>
                <label style={{ fontWeight: "600" }} htmlFor="">
                  {trasnaltions[lang].Order}
                </label>
                <textarea
                  rows={5}
                  placeholder={trasnaltions[lang].Notes}
                  style={{
                    border: "none",
                    backgroundColor: "#F9FAFB",
                    color: "#576471",
                  }}
                  className=" form-chek w-100 p-2 px-3 rounded-3 mt-3"
                  name=""
                  id=""
                ></textarea>
              </div>
            </form>
          </div>
          <div className="col-md-6 mt-3">
            <div style={{ border: "#E6EAEC solid 2px" }} className="p-4">
              <h1 className="fs-5 fw-bold">{trasnaltions[lang].Yourorder}</h1>
              <div className="row mt-2">
                <div className="col-md-6">
                  <p className="fw-bold">{trasnaltions[lang].Product}</p>
                </div>
                <div className="col-md-6 text-end">
                  <p className="fw-bold">{trasnaltions[lang].Subtotal}</p>
                </div>
              </div>
              <hr />
              {cart.map((item) => (
                <CheckoutItem key={item.id} item={item} />
              ))}
              <div className="row borderitems py-3">
                <div className="col-md-10">
                  <p className="fw-bold">{trasnaltions[lang].Subtotal}</p>
                </div>
                <div className="col-md-2">
                  <p className="fw-bold">${totalPrice}.00</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-10">
                  <p className="fw-bold">{trasnaltions[lang].Total}</p>
                </div>
                <div className="col-md-2">
                  <p className="fw-bold">${total}</p>
                </div>
              </div>
              <p
                className=""
                style={{
                  display: Math.abs(totalPrice) >= 300 ? "none" : "",
                }}
              >
                {trasnaltions[lang].Add} {Math.abs(totalPrice - 300)}{" "}
                {trasnaltions[lang].shipping}{" "}
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  display: Math.abs(totalPrice) >= 300 ? "inline" : "none",
                }}
              >
                {trasnaltions[lang].Congratulations}
              </p>
              <div className="" style={{ overflowX: "hidden" }}>
                <div
                  className="mt-3"
                  style={{
                    backgroundColor: "#E6EAEC",
                    height: "4px",
                    zIndex: "4",
                  }}
                ></div>
                <div
                  className=""
                  style={{
                    backgroundColor: "#FBBF47",
                    height: "4px",
                    marginTop: "-4px",
                    width: `${value}%`,
                  }}
                ></div>
              </div>
              <hr />
              <div className="col-md-12">
                <div
                  className="d-flex p-3 gap-2"
                  style={{ backgroundColor: "#F0F1F3" }}
                >
                  <div className="mt-2">
                    <i class="fa-regular fa-bell fa-xl "></i>
                  </div>
                  <div className="">
                    <p className="text-muted">{trasnaltions[lang].Sorry}</p>
                  </div>
                </div>
                <p className="mt-3 text-muted ">
                  {trasnaltions[lang].personal}
                </p>
                <button className="w-100 py-3 rounded fw-bold warningbtn">
                  {trasnaltions[lang].placeorder}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
