import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";

const News = () => {
  const [newsData, setNewsData] = useState({});

  useEffect(() => {
    axios
      .get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
      .then((res) => {
        console.log(res.data);
        setNewsData(res.data);
      });
  }, []);

  let allKeys = [];
  if (newsData.Data) {
    allKeys = Object.keys(newsData.Data);
  }
  console.log(allKeys);
  return (
    <div>
      <div className="border-bottom">
        <div className="text">NEWS</div>
        <img
          src="https://icon-library.com/images/android-3-dot-menu-icon/android-3-dot-menu-icon-0.jpg"
          id="vertical-menu"
        ></img>
      </div>
      <div className="container-news border-bottom">
        <div className="row px-3">
          <div className="col col-left p-2">Latest Stories</div>
          <div className="col col-right p-2">Sources</div>
        </div>
      </div>
      {allKeys.map((d, n) => {
        let news = newsData.Data[d];
        console.log(d);
        return (
          <div className="container-news border-bottom" key={n}>
            <div className="row">
              <div className="col-sm-10 news-title">
                {news.title}
                <div>{news.categories}</div>
              </div>
              <img className="col-sm-2 news-img" src={news.imageurl} />
            </div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default News;
