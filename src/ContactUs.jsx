import { LangContext } from "./LangContext.JSX";
import { useContext } from "react";
import thekid from "./assets/thekid.png";
export default function ContactUs() {
  const { lang, trasnaltions } = useContext(LangContext);
  return (
    <>
      <div className="container" style={{marginTop:"10rem"}}>
        <div className="row">
          <div className="col-md-6 px-5 ">
            <div
              style={{ backgroundColor: "#ffebbe", borderRadius: "18px" }}
              className="py-5 text-center"
            >
              <img
                style={{ transform: "scale(1.5)" }}
                src={thekid}
                className="img-fluid "
                alt=""
              />
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="d-flex gap-2">
                  <i
                    style={{ marginTop: "11px" }}
                    className="fa-solid fa-location-dot fa-xl "
                  ></i>

                  <div className="">
                    <p className="fw-bold">{trasnaltions[lang].Address}</p>
                    <p style={{ marginTop: "-12px" }}>
                      {trasnaltions[lang].pAddress}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-end">
                <button
                  className="border fw-bold rounded-3 border-2"
                  style={{
                    border: "none",
                    background: "none",
                    padding: "10px",
                  }}
                >
                  {trasnaltions[lang].btnAddress}
                </button>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex gap-2">
                  <i
                    style={{ marginTop: "11px" }}
                    className="fa-solid fa-phone fa-xl "
                  ></i>

                  <div className="">
                    <p className="fw-bold">{trasnaltions[lang].Call}</p>
                    <div style={{ marginTop: "-12px" }}>
                      <p className="">
                        <span className="fw-bold">
                          {trasnaltions[lang].CallP1}
                        </span>
                        {trasnaltions[lang].num1}
                      </p>
                      <p style={{ marginTop: "-12px" }} className="">
                        <span className="fw-bold">
                          {trasnaltions[lang].CallP2}
                        </span>
                        {trasnaltions[lang].email1}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex gap-2">
                  <i
                    style={{ marginTop: "11px" }}
                    className="fa-regular fa-clock fa-xl "
                  ></i>

                  <div className="">
                    <p className="fw-bold">{trasnaltions[lang].Hours}</p>
                    <div style={{ marginTop: "-12px" }}>
                      <p className="">
                        <span className="fw-bold">
                          {trasnaltions[lang].HoursP1}
                        </span>
                        {trasnaltions[lang].ocloc1}
                      </p>
                      <p style={{ marginTop: "-12px" }} className="">
                        <span className="fw-bold">
                          {trasnaltions[lang].HoursP2}
                        </span>
                        {trasnaltions[lang].ocloc2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h1 className="fw-bold w-75">{trasnaltions[lang].Questions}</h1>
            <p>{trasnaltions[lang].pQuestions}</p>
            <form action="">
              <div className="row mt-3">
                <div className=" col-md-6 mt-4">
                  <div className="">
                    <label htmlFor="">{trasnaltions[lang].FirstName}</label>
                    <input
                      className="w-100 px-2 form-control inp-focus"
                      style={{
                        backgroundColor: "#f9fafb",
                        border: "none",
                        display: "block",
                      }}
                      type="text"
                      placeholder={`${trasnaltions[lang].FirstName}`}
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className=" col-md-6 mt-4">
                  <div className="">
                    <label htmlFor="">{trasnaltions[lang].LastName}</label>
                    <input
                      className="w-100 px-2 form-control inp-focus"
                      style={{
                        backgroundColor: "#f9fafb",
                        border: "none",
                        display: "block",
                      }}
                      type="text"
                      placeholder={`${trasnaltions[lang].LastName}`}
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className=" col-md-12 mt-4">
                  <div className="">
                    <label htmlFor="">{trasnaltions[lang].Email}</label>
                    <input
                      className="w-100 px-2 form-control inp-focus"
                      style={{
                        backgroundColor: "#f9fafb",
                        border: "none",
                        display: "block",
                      }}
                      type="email"
                      placeholder={`${trasnaltions[lang].Email}`}
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className=" col-md-12 mt-4">
                  <div className="">
                    <label htmlFor="">{trasnaltions[lang].Subject}</label>
                    <input
                      className="w-100 inp-focus px-2 form-control inp-focus"
                      style={{
                        backgroundColor: "#f9fafb",
                        border: "none",
                        display: "block",
                      }}
                      type="text"
                      placeholder={`${trasnaltions[lang].Subject}`}
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className=" col-md-12 mt-4">
                  <div className="">
                    <label htmlFor="">{trasnaltions[lang].YourMessage}</label>
                    <textarea
                      rows={6}
                      placeholder={`${trasnaltions[lang].YourMessage}`}
                      className="w-100 px-2 form-control inp-focus"
                      style={{
                        backgroundColor: "#f9fafb",
                        border: "none",
                        display: "block",
                      }}
                      name=""
                      id=""
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn text-white mt-3 SendMessage px-4"
                style={{
                  padding: "13px",
                }}
              >
               {trasnaltions[lang].Send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
