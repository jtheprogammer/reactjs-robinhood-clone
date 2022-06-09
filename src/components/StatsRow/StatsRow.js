import React from "react";
import { Button } from "@mui/material";
import negStock from "./../../assets/negStock.svg";
import posStock1 from "./../../assets/posStock1.svg"

import { db } from "../../firebase";
import "./StatsRow.css"

const StatsRow = (props) => {
  const dailypercentage = ((props.price - props.openPrice)/props.openPrice) * 100;

  const percentage = Number(dailypercentage).toFixed(2)

  const buyStock = () => {
    db
    .collection("portfolioStocks")
    .where("ticker", "==", props.name)
    .get()
    .then( 
      (querySnapshot) => {
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => (
          db.collection("portfolioStocks")
          .doc(doc.id)
          .update({
            shares: doc.data().shares += 1
          })
        ))
        } else {
          db.collection("portfolioStocks")
          .add({
            ticker: props.name,
            shares: 1
          })
        }
      }
    )
  }

  const sellStock = () => {
    db
    .collection("portfolioStocks")
    .where("ticker", "==", props.name)
    .get()
    .then( 
      (querySnapshot) => {
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => (
          db.collection("portfolioStocks")
          .doc(doc.id)
          .update({
            shares: doc.data().shares -= 1
          })
        ))
        } else {
          db.collection("portfolioStocks")
          .add({
            ticker: props.name,
            shares: -1
          })
        }
      }
    )
  }


  return (
    <div className="row" >
      <div className="row__intro" onClick={buyStock}>
        <h1>{props.name}</h1>
        <p>{props.shares && 
          (props?.shares + " shares")
        }</p>
      </div>
      {props.shares >=1 ? (
              <div className="row__sharesButtons">
              <Button variant="contained" className="sell"
              onClick={sellStock}
              style={{ backgroundColor: "black", color:"#5ac53b", borderRadius:"15px", padding:"10px", zIndex:3 }}>Sell Stock</Button>
            </div>
      ) : (null)}
      <div className="row__chart">
        <img src={
          percentage > 0 ? (posStock1) : (negStock)} height={16}/>
      </div>
      <div className="row__numbers">
        <p className="row__price">${Number(props.price).toFixed(2)}</p>
        <p className={
          percentage>0 ? "row__percentagePos" : "row__percentageNeg"
        }>{percentage}%</p>
      </div>
    </div>
  );
}

export default StatsRow;