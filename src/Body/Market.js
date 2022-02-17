import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";

const Market = () => {
  const [coinList, setCoinList] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,SHIB,XRP,DOGE,SLP,ADA,BNB,BUSD,SOL,LUNA,TRX,DOT,AVAX,USDT,MATIC,FTM,ATOM,ETC,LTC,ONGAS,LINK,SAND,MANA,WIN,THETA,EGLD,BCH,NFT,NEAR&tsyms=USD,INR,EUR"
      )
      .then((res) => {
        setCoinList(res.data);
      });
  }, []);

  useEffect(() => {
    searchcoins();
  }, [coinList]);

  let allCoin = [];
  if (coinList.DISPLAY) {
    allCoin = Object.keys(coinList.DISPLAY);
  }

  const searchcoins = (searchValue) => {
    if (searchValue) {
      const filteredCoin = allCoin.filter((item) => {
        return item
          .toLowerCase()
          .includes(searchValue && searchValue.toLowerCase());
      });
      setFilteredResults(filteredCoin);
    } else {
      setFilteredResults(allCoin);
    }
  };

  return (
    <div>
      <div className="container-search">
        <input
          type="text"
          className="coin-search"
          aria-label="Search over 8000 coins"
          placeholder="Search over 8000 coins"
          onChange={(e) => searchcoins(e.target.value)}
        ></input>

        <img
          src="https://icon-library.com/images/android-3-dot-menu-icon/android-3-dot-menu-icon-0.jpg"
          id="vertical-icon"
          alt="menu"
        ></img>
      </div>
      <div className="coin-list-heading-container">
        <div className="row coin-list-heading py-3">
          <div className="col-sm-4 coin-label-heading">COIN</div>
          <div className="col-sm-4 coin-price-heading">PRICE</div>
          <div className="col-sm-4 coin-value-heading">CAP/VAL</div>
        </div>
      </div>

      {filteredResults.map((data, index) => {
        let coinset = coinList.DISPLAY[data];
        var baseURL = `https://www.cryptocompare.com${coinset.INR.IMAGEURL}`;

        return (
          <div className="coin-list-container" key={index}>
            <div className="row">
              <div className="col-sm-4 coin-label py-2">
                <img src={baseURL} className="coin-list-image" alt="coin" />
                <span>{data}</span>
              </div>
              <div className="col-sm-4 coin-list-price py-3">
                {coinset.INR.PRICE}
                <div
                  className={
                    coinset.INR.CHANGEPCTDAY > 0
                      ? "positive-rate-change"
                      : "negative-rate-change"
                  }
                >
                  {coinset.INR.CHANGEPCTDAY + "%"}
                </div>
              </div>
              <div className="col-sm-4 coin-list-value py-3">
                {coinset.INR.MKTCAP}
              </div>
            </div>
          </div>
        );
      })}

      <Footer />
    </div>
  );
};

export default Market;
