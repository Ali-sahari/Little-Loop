import item1 from "./assets/itemsimg/item1.webp";
import item2 from "./assets/itemsimg/item2.webp";
import item3 from "./assets/itemsimg/item3.webp";
import item4 from "./assets/itemsimg/item4.webp";
import item5 from "./assets/itemsimg/item5.webp";
import item6 from "./assets/itemsimg/item6.webp";
import item7 from "./assets/itemsimg/item7.webp";
import item8 from "./assets/itemsimg/item8.webp";

import { useState, useContext, useEffect } from "react";
import { LangContext, CartContext, ProInformation } from "./LangContext.JSX";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
export default function Cart() {
  const { information, setInformation, Information } = useContext(ProInformation)
  const { lang, trasnaltions } = useContext(LangContext);
  const { cart, totalPrice, addToCart, itemsList, total, stetotal } = useContext(CartContext);
  const [copon, setcopon] = useState("");
  const [value, setValue] = useState(totalPrice / 3);
  useEffect(() => {
    stetotal(totalPrice.toFixed(2));
  }, [totalPrice]);
  // if (!cart || cart.length === 0) {
  //   return (
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-md-12  ">
  //           <div
  //             className=" rounded-3 p-2 "
  //             style={{ marginTop: "10rem", backgroundColor: "#F0F1F3" }}
  //           >
  //             <div className="row">
  //               <div className="col-md-11 ">
  //                 <p className=" text-muted">
  //                   <i class="fa-regular fa-bell fa-fade fa-xl"></i>
  //                   <span className="ms-2 ">{trasnaltions[lang].warning1}</span>
  //                 </p>
  //               </div>
  //               <div className="col-md-1">
  //                 <button className="warningbtn w-100 py-2">
  //                   {trasnaltions[lang].warningbtn1}
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="col-md-12 mt-4 ">
  //           <div
  //             className=" rounded-3 p-2 "
  //             style={{ backgroundColor: "#F0F1F3" }}
  //           >
  //             <p className=" text-muted">
  //               <i class="fa-regular fa-bell fa-fade fa-xl"></i>
  //               <span className="ms-2 ">{trasnaltions[lang].warning2}</span>
  //             </p>
  //           </div>
  //         </div>
  //         <div className="col-md-12 mt-4 ">
  //           <div
  //             className=" rounded-3 p-2 "
  //             style={{ backgroundColor: "#F0F1F3" }}
  //           >
  //             <p className=" text-muted">
  //               <i class="fa-regular fa-bell fa-fade fa-xl"></i>
  //               <span className="ms-2 ">{trasnaltions[lang].warning3}</span>
  //             </p>
  //           </div>
  //         </div>
  //         <div className="col-md-2 mt-3 ">
  //           <Link to="/">
  //             <button className="w-100 py-3 warningbtn">
  //               {trasnaltions[lang].warningbtn2}
  //             </button>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }


  const COPON = () => {
    if (copon === "DISCOUNT10") {
      alert(trasnaltions[lang].discount);
      setcopon("");
      stetotal(totalPrice * 0.7);
    } else if (copon === "SAVE8") {
      alert(trasnaltions[lang].discount2);
      setcopon("");
      stetotal(totalPrice * 0.92);
    } else if (copon === "SUPER18") {
      alert(trasnaltions[lang].discount3);
      setcopon("");
      stetotal(totalPrice * 0.82);
    } else if (copon === "ULTRA22") {
      alert(trasnaltions[lang].discount4);
      setcopon("");
      stetotal(totalPrice * 0.78);
    } else if (copon === "FLASH35") {
      alert(trasnaltions[lang].discount5);
      setcopon("");
      stetotal(totalPrice * 0.65);
    }
  };

  const [Giveacoupon, setGiveacoupon] = useState("");

  const availableCoupons = [
    "DISCOUNT10",
    "SAVE8",
    "SUPER18",
    "ULTRA22",
    "FLASH35",
  ];

  const handleGiveCoupon = () => {
    setGiveacoupon(trasnaltions[lang].Loding);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * availableCoupons.length);
      const newCoupon = availableCoupons[randomIndex];
      setGiveacoupon(newCoupon);
    }, 3000);
  };

  return (
    <div className="container  " style={{ marginTop: "10rem" }}>
      <div className="row">
        <div className="col-md-8 mt-5"

        >
          <div
            style={{
              height: "400px",
              overflowY: "scroll",
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
            className="">
            <div
              className="row ms-2"
              style={{
                border: "none",
                borderBottom: "1px solid #E6EAEC",
              }}
            >
              <div className="col-md-5 col-4 fw-bold">
                {trasnaltions[lang].cardProduct}
              </div>
              <div className="col-md-3 col-3 fw-bold">
                {trasnaltions[lang].cardQuantity}
              </div>
              <div className="col-md-3 col-3 fw-bold">
                {trasnaltions[lang].cardSubtotal}{" "}
              </div>
            </div>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <div className="row">

            </div>
          </div>
          <div className="row" >
            <div className="col-md-5">
              <div className="mt-3 input-group ">
                <input
                  onChange={(e) => setcopon(e.target.value)}
                  value={copon}
                  placeholder={trasnaltions[lang].Couponcode}
                  style={{ height: "40px" }}
                  type="text"
                  className="form-control  d-inline "
                  name=""
                  id=""
                />
                <button
                  onClick={COPON}
                  style={{ height: "40px" }}
                  className="warningbtn px-2  "
                >
                  {trasnaltions[lang].Applycoupon}
                </button>
              </div>
            </div>
            <div className="col-md-5">
              <div className="mt-3 input-group">
                <input
                  style={{ height: "40px" }}
                  type="text"
                  className="form-control d-inline"
                  value={Giveacoupon}
                  readOnly
                />
                <button
                  onClick={handleGiveCoupon}
                  style={{ height: "40px" }}
                  className="warningbtn px-2"
                  disabled={Giveacoupon === "Loding..."}
                >
                  {trasnaltions[lang].Giveacoupon}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-4"

        >
          <div className="border p-4 border-2" style={{ overflow: "hidden" }}>
            <p className="fw-bold">{trasnaltions[lang].Carttotals}</p>
            <div
              className="row text-muted "
              style={{
                border: "none",
                borderBottom: "1px solid #E6EAEC",
              }}
            >
              <div className="col-md-9 col-10">
                <p className="fw-bold">{trasnaltions[lang].Subtotal}</p>
              </div>
              <div className="col-md-1 col-1">${totalPrice}.00</div>
            </div>
            <div className="row mt-2 text-muted">
              <div className="col-md-9 col-10">
                <p className="fw-bold">{trasnaltions[lang].Total}</p>
              </div>
              <div className="col-md-1 col-1 fw-bold">
                <p className="text-nowrap">${total}</p>
              </div>
            </div>
            {/* */}
            <div className="col-md-12  rounded p-3 mt-3 m">
              <h1 className="fs-6">{trasnaltions[lang].SuggestedProducts}</h1>
              <div
                id="slides-with-indicators"
                className="carousel slide borderitems py-4 d-none"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner ">
                  {itemsList.map((item, index) => (
                    <div
                      key={item.id}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <div className="row">
                        <div className="col-md-4">
                          <Link onClick={() => setInformation(item.on)} to="/ProductInformation"><img src={item.img} className="img-fluid img-big" alt="" /></Link>
                        </div>
                        <div className="col-md-6">
                          <h1 className="fs-6">
                            {trasnaltions[lang][item.titleitem]}
                          </h1>
                          <p>${item.priceKey}</p>
                          <button
                            className="warningbtn w-75  rounded  "
                            onClick={() => addToCart(item)}
                            style={{ fontSize: "0.8rem" }}
                          >
                            {trasnaltions[lang][item.btnKey]}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="carousel-indicators">
                  <button
                    className="active"
                    type="button"
                    data-bs-target="#slides-with-indicators"
                    data-bs-slide-to="0"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#slides-with-indicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#slides-with-indicators"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#slides-with-indicators"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/*غلط  */}
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
                    transition: "width 0.300s ease",

                    width: `${value}%`,
                  }}
                ></div>
              </div>
              <hr />
              <Link to="/Checkout">
                <button className="warningbtn w-100 rounded-4 py-3">
                  {trasnaltions[lang].Proceedtocheckout}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
