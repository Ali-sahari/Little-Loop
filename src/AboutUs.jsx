import { useContext, useEffect, useState } from "react";
import { LangContext } from "./LangContext.JSX";
import homeheroimage2 from "./assets/homeheroimage2.webp";
import childimage6 from "./assets/childimage6.webp";
import childimage7 from "./assets/childimage7.webp";
export default function AboutUs() {
  const { trasnaltions, lang } = useContext(LangContext);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 12 ? prev + 1 : prev));
      setCount2((prev) => (prev < 60 ? prev + 1 : prev));
      setCount3((prev) => (prev < 10 ? prev + 1 : prev));
    }, 30);

    return () => clearInterval(interval);
  }, []); 
  return (
    <>
      <div className="container" style={{marginTop:"10rem"}} >
        <div className="row">
          <div className="col-md-6">
            <h1 className="fs-5 text-muted">
              {trasnaltions[lang].ndConfident}
            </h1>
            <p className="fs-2 fw-bold" style={{ lineHeight: "1.2" }}>
              {trasnaltions[lang].pConfident}
            </p>
          </div>
          <div className="col-md-6 text-end">
            <button
              className="btn border px-5 btn3 mt-3"
              style={{ padding: "10px", fontWeight: "600" }}
            >
              {trasnaltions[lang].btn5}
              <i className="bi bi-arrow-up-right"></i>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mt-5">
            <img
              className="img-fluid rounded-4"
              src={
                "https://startersites.io/blocksy/kiddy/wp-content/uploads/2025/01/about-us-image-1.webp"
              }
              alt=""
            />
            <div className="mt-4">
              <h1 className="fs-4 fw-bold">{trasnaltions[lang].Driven}</h1>
              <p className="text-muted fs-6">{trasnaltions[lang].pDriven}</p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid rounded-4"
              src={
                "https://startersites.io/blocksy/kiddy/wp-content/uploads/2025/01/about-us-image-2.webp"
              }
              alt=""
            />
            <div className="mt-4">
              <h1 className="fs-4 fw-bold">{trasnaltions[lang].Designed}</h1>
              <p className="text-muted fs-6">{trasnaltions[lang].pDesigned}</p>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <img
              className="img-fluid rounded-4"
              src={
                "https://startersites.io/blocksy/kiddy/wp-content/uploads/2025/01/about-us-image-3.webp"
              }
              alt=""
            />
            <div className="mt-4">
              <h1 className="fs-4 fw-bold">{trasnaltions[lang].Sustainable}</h1>
              <p className="text-muted fs-6">
                {trasnaltions[lang].pSustainable}
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="rounded-4" style={{ backgroundColor: "#FFEBBE" }}>
              <img src={homeheroimage2} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-5 ms-5">
            <h1 className="fw-bold">{trasnaltions[lang].Best}</h1>
            <p className="text-muted mt-3">
              {trasnaltions[lang].withstandalltheiradventures}
            </p>
            <div className="row">
              <div className="col-md-4">
                <p className="fw-bold fs-1">{count}+</p>
                <hr />
                <p className="fw-bold fs-5">{trasnaltions[lang].Years}</p>
              </div>
              <div className="col-md-4">
                <p className="fw-bold fs-1">{count2}+</p>
                <hr />
                <p className="fw-bold fs-5">{trasnaltions[lang].Stores}</p>
              </div>
              <div className="col-md-4">
                <p className="fw-bold fs-1">{count3}+</p>
                <hr />
                <p className="fw-bold fs-5">{trasnaltions[lang].Countries}</p>
              </div>
              <div className="col-md-12">
                <button
                  className="btn border px-5 py-3 btn4 mt-3"
                  style={{ padding: "10px", fontWeight: "600" }}
                >
                  {trasnaltions[lang].btn6}{" "}
                  <i className="bi bi-arrow-up-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 border border-3 rounded p-3 mt-3">
            <div
              id="slides-with-indicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  style={{ backgroundColor: "#FDB016" }}
                  className="active"
                  type="button"
                  data-bs-target="#slides-with-indicators"
                  data-bs-slide-to="0"
                ></button>

                <button
                  style={{ backgroundColor: "#FDB016" }}
                  className="active"
                  type="button"
                  data-bs-target="#slides-with-indicators"
                  data-bs-slide-to="1"
                ></button>
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row justify-content-center ">
                    <div className="col-md-12 ">
                      <div className="text-center">
                        <img
                          src={childimage6}
                          style={{
                            height: "60px",
                            borderRadius: "50%",
                            border: "#F5F5F5 solid 3px",
                          }}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-8 ">
                      <div className="text-center">
                        <p className="fs-4">{trasnaltions[lang].little}</p>
                        <h1 className="fs-6 fw-bold">
                          {trasnaltions[lang].SamathaJackson}
                        </h1>
                        <p>{trasnaltions[lang].Client}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row justify-content-center ">
                    <div className="col-md-12 ">
                      <div className="text-center">
                        <img
                          src={childimage7}
                          style={{
                            height: "60px",
                            borderRadius: "50%",
                            border: "#F5F5F5 solid 3px",
                          }}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-8 ">
                      <div className="text-center">
                        <p className="fs-4">{trasnaltions[lang].little2}</p>
                        <h1 className="fs-6 fw-bold">
                          {trasnaltions[lang].SamathaJackson2}
                        </h1>
                        <p>{trasnaltions[lang].Client2}</p>
                      </div>
                    </div>
                  </div>
                </div>
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
          </div>
        </div>
        <div className="row mt-5 ">
          <div
            className="col-md-12"
            style={{ backgroundColor: "#F9FAFB", border: "none" }}
          >
            <div className="accordion ">
              <div
                className="accordion-item"
                style={{ backgroundColor: "#F9FAFB", border: "none" }}
              >
                <div className="accordion-header">
                  <button
                    style={{ backgroundColor: "#F9FAFB", border: "none" }}
                    className="accordion-button fw-bold text-dark fs-4"
                    data-bs-toggle="collapse"
                    data-bs-target="#episode-1-body"
                  >
                    {trasnaltions[lang].ultricies}
                  </button>
                  <div className=" show" id="episode-1-body">
                    <div className="accordion-body">
                      <p className=" text-muted">
                        {trasnaltions[lang].ultriciesp1}
                      </p>
                      <p className="mt-3 text-muted">
                        {trasnaltions[lang].ultriciesp2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion ">
              <div
                className="accordion-item"
                style={{ backgroundColor: "#F9FAFB", border: "none" }}
              >
                <div className="accordion-header">
                  <button
                    style={{ backgroundColor: "#F9FAFB", border: "none" }}
                    className="accordion-button fw-bold text-dark fs-4"
                    data-bs-toggle="collapse"
                    data-bs-target="#episode-2-body"
                  >
                    {trasnaltions[lang].Consequat}
                  </button>
                  <div   className="accordion-collapse collapse" id="episode-2-body">
                    <div className="accordion-body">
                      <p className=" text-muted">
                        {trasnaltions[lang].Consequatp1}
                      </p>
                      <p className="mt-3 text-muted">
                        {trasnaltions[lang].Consequatp2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div className="accordion ">
              <div
                className="accordion-item"
                style={{ backgroundColor: "#F9FAFB", border: "none" }}
              >
                <div className="accordion-header">
                  <button
                    style={{ backgroundColor: "#F9FAFB", border: "none" }}
                    className="accordion-button fw-bold text-dark fs-4"
                    data-bs-toggle="collapse"
                    data-bs-target="#episode-3-body"
                  >
                    {trasnaltions[lang].Metus}
                  </button>
                  <div   className="accordion-collapse collapse" id="episode-3-body">
                    <div className="accordion-body">
                      <p className=" text-muted">
                        {trasnaltions[lang].Metusp1}
                      </p>
                      <p className="mt-3 text-muted">
                        {trasnaltions[lang].Metusp2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>   
        </div>
      </div>
      
    </>
  );
}
