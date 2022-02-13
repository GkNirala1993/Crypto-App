import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Home = () => {
  const [data, setData] = useState({});
  const [port, setPort] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,EOS,BCH&tsyms=USD,EUR,INR"
      )
      .then((res) => {
        setData(res.data);
      });
  }, []);

  let allKeys = [];
  if (data.DISPLAY) {
    allKeys = Object.keys(data.DISPLAY);
  }

  return (
    <div>
      <Header />
      <div className="container-top px-3 py-2">
        <div className="row">
          <div className="col-sm-6 text-start">Portfolio 1</div>
          <div className="col-sm-6 text-end">24 Hr</div>
        </div>
        <div className="row">
          <div className="col-sm-6 text-start mt-3">$ Amount</div>
          <div className="col-sm-6 text-end mt-3">
            <img
              src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/344/external-ecg-diagnosis-with-the-wave-diagram-on-a-monitor-hospital-bold-tal-revivo.png"
              id="top-icon"
            ></img>
          </div>
        </div>
      </div>
      <div className="container-coin border-bottom">
        <div className="row">
          <div className="col p-3">COIN</div>
          <div className="col p-3">PRICE</div>
          <div className="col p-3">HIGH PER DAY</div>
          <div className="col p-3">LOW PER DAY</div>
          <div className="col p-3">MARKET CAP</div>
        </div>
      </div>
      {allKeys.map((d, n) => {
        let dataset = data.DISPLAY[d];
        var baseURL = `https://www.cryptocompare.com${dataset.INR.IMAGEURL}`;
        return (
          <div className="container-coin border-bottom">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <img src={baseURL} className="coin-image" />
                <div className="p-3 coin-name">{d}</div>
              </div>
              <div className="col p-3">
                {dataset.INR.PRICE}
                <div className="rate-change">
                  {dataset.INR.CHANGEPCTDAY + "%"}
                </div>
              </div>
              <div className="col p-3">{dataset.INR.HIGHDAY}</div>
              <div className="col p-3">{dataset.INR.LOWDAY}</div>
              <div className="col p-3">{dataset.INR.MKTCAP}</div>
            </div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default Home;
