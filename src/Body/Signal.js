import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";

const Signal = () => {
  const [signalData, setSignalData] = useState({});

  useEffect(() => {
    axios
      .get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
      .then((res) => {
        console.log(res.data);
        setSignalData(res.data);
      });
  }, []);

  let allKeys = [];
  if (signalData.Data) {
    allKeys = Object.keys(signalData.Data);
  }
  console.log(allKeys);
  return (
    <div>
      <div className="border-bottom">
        <div className="text-signal">Signal</div>
        <img
          src="https://icon-library.com/images/android-3-dot-menu-icon/android-3-dot-menu-icon-0.jpg"
          id="vertical-menu"
        ></img>
      </div>
      {allKeys.map((d, n) => {
        let signal = signalData.Data[d];
        console.log(d);
        return (
          <div className="container-signal" key={n}>
            <div className="row signl-list">
              <div className="col-sm-2">
                <img className="signal-img" src={signal.imageurl} />
              </div>
              <div className="col-sm-10 signal-data">
                  <div className="signal-title">{signal.source}</div>
                  <div className="signal-categories">{signal.categories}</div>
                  <div className="signal-body">{signal.body}</div>
                  </div> 
            </div>
          </div>
        );
      })}
      <Footer/>
    </div>
  );
};

export default Signal;
