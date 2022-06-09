import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Stats.css";
import StatsRow from "./../StatsRow/StatsRow"
import { db } from "../../firebase";

const Stats = () => {
  
  const [ stockData, setStockData ] = useState([]);
  const [ portfolioStocks, setPortfolioStocks ] = useState([]);

  const getStockData = async (stock) => {
    try {
      return await axios
        .get(`${process.env.REACT_APP_BASE_URL}${stock}&token=${process.env.REACT_APP_FINNHUB_API_KEY}`);
    } catch (error) {
      console.log("Error", error.message);
    }
 };

  const getPortfolioStocks = () => {
    db
    .collection("portfolioStocks")
    .onSnapshot(snapshot => {
        let promises = [];
        let tempData = []
        snapshot.docs.map((doc) => (
          promises.push(getStockData(doc.data().ticker)
          .then((res) => {
            tempData.push({
              id: doc.id,
              data: doc.data(),
              info: res.data
            })
          })
        )))
        Promise.all(promises).then(()=> {
          setPortfolioStocks(tempData);
        })
    })
  }

  
  useEffect(() => {
    const stocksList = ["AAPL", "FB", "BABA", "GOOGL", "AMZN"];

    getPortfolioStocks();
    const testData = []
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStockData(stock)
        .then((res) => {
          testData.push({
            name: stock,
            ...res.data
          });
        }),
      console.log(testData)
      )
    });

    Promise.all(promises).then(()=>{
      setStockData(testData);
    })
  }, []);

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header" >
          <p>Stocks</p>
        </div>
        {/* Content Containing Current Assets */}
        <div className="stats__content" >
          <div className="stats__rows myPortfolio" >
          {portfolioStocks.map((stock) => (
                <StatsRow
                  key={stock.data.ticker}
                  name={stock.data.ticker}
                  openPrice={stock.info.o}
                  price={stock.info.c}
                  shares={stock.data.shares}
                />
            )
          )}
          </div>
        </div>
        <div className="stats__header stats__lists" >
          <p>Lists</p>
        </div>

        {/* Stocks That Can Be Purchased */}
        <div className="stats__content" >
          <div className="stats__rows stocks" >
            {stockData.map((stock) => (
                <StatsRow
                  key={stock.symbol}
                  name={stock.name}
                  openPrice={stock.o}
                  price={stock.c}
                /> 
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats;