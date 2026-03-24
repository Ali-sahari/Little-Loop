import { useContext, useEffect, useState } from "react";
import { LangContext } from "./LangContext";
export default function News() {
  const { lang, trasnaltions } = useContext(LangContext);

  const NewsArray = [
    {
      img: "https://startersites.io/blocksy/kiddy/wp-content/uploads/2025/02/blog-image-1-600x360.webp",
      id: 1,
      category: trasnaltions[lang].NewsCatTrend,
      title: trasnaltions[lang].NewsTitle1,
      text: trasnaltions[lang].NewsText1,
    },
    {
      img: "https://startersites.io/blocksy/kiddy/wp-content/uploads/2025/02/blog-image-2-600x360.webp",
      id: 2,
      category: trasnaltions[lang].NewsCatTips,
      title: trasnaltions[lang].NewsTitle2,
      text: trasnaltions[lang].NewsText2,
    },
    {
      img: "https://startersites.io/blocksy/kiddy/wp-content/uploads/2025/02/blog-image-3-600x360.webp",
      id: 3,
      category: trasnaltions[lang].NewsCatFashion,
      title: trasnaltions[lang].NewsTitle3,
      text: trasnaltions[lang].NewsText3,
    },
    {
      img: "https://startersites.io/blocksy/kiddy/wp-content/uploads/2025/02/blog-image-4-600x360.webp",
      id: 4,
      category: trasnaltions[lang].NewsCatTrend,
      title: trasnaltions[lang].NewsTitle4,
      text: trasnaltions[lang].NewsText4,
    },
    {
      img: "https://startersites.io/blocksy/kiddy/wp-content/uploads/2025/02/blog-image-5-600x360.webp",
      id: 5,
      category: trasnaltions[lang].NewsCatTips,
      title: trasnaltions[lang].NewsTitle5,
      text: trasnaltions[lang].NewsText5,
    },
    {
      img: "https://startersites.io/blocksy/kiddy/wp-content/uploads/2025/02/blog-image-6-600x360.webp",
      id: 6,
      category: trasnaltions[lang].NewsCatFashion,
      title: trasnaltions[lang].NewsTitle6,
      text: trasnaltions[lang].NewsText6,
    },
  ];

  return (
    <>
      <div className="container" style={{ marginTop: "10rem" }}>
        <div className="row ">
          {/* =================== LEFT CONTENT =================== */}
          <div className="col-md-9">
            {NewsArray.map((item) => (
              <div className="">
                <div className="row mt-5 rounded-4 " key={item.id}>
                  <div className="col-md-5    divHomecta3image ">
                    <div className="rounded-4 " style={{ overflow: "hidden",height:"100%" }}>
                      <img
                        src={item.img}
                        style={{height:"100%"}}
                        alt=""
                        className="img-fluid   rounded-4  w-100 homecta3image"
                      />
                    </div>
                  </div>

                  <div className="col-md-7">
                    <span className="bg-dark rounded text-white badge p-2">
                      {item.category}
                    </span>

                    <h4 className="fw-bold mt-1 mb-4">{item.title}</h4>

                    <span>
                      <img
                        src={
                          "https://startersites.io/blocksy/kiddy/wp-content/uploads/2025/01/child-image-2-100x100.webp"
                        }
                        alt=""
                        className="rounded-circle"
                        style={{ width: "5%" }}
                      />
                      <span
                        className="fw-semibold me-4 ms-1"
                        style={{ fontSize: "14px" }}
                      >
                        {trasnaltions[lang].AuthorName}
                      </span>

                      <span
                        className="fw-semibold"
                        style={{ fontSize: "14px" }}
                      >
                        {trasnaltions[lang].DateExample}
                      </span>
                    </span>

                    <p className="text-muted">{item.text}</p>
                  </div>

                  <hr className="mt-5" />
                </div>
              </div>
            ))}
          </div>

          {/* =================== RIGHT SIDEBAR =================== */}
        </div>
      </div>
    </>
  );
}
