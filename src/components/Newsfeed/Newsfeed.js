import React, { useState, useEffect } from "react";
import LineGraph from "./../LineGraph/LineGraph"
import Timeline from "../Timeline/Timeline";
import "./Newsfeed.css"
import { Chip } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMicrochip, faArrowTrendUp, faCannabis, faMaskFace, faCubes, faPrescription, faCarAlt } from '@fortawesome/free-solid-svg-icons'
import { faBtc } from "@fortawesome/free-brands-svg-icons";

const Newsfeed = () => {

  const topics = {
    technology: 
      {
        label: "Technology",
        icon: <FontAwesomeIcon icon={faMicrochip} style={{ height:"30px", color:"white"}} />
      },
    upcomingEarnings: 
      {
        label: "Upcoming Earnings",
        icon: <FontAwesomeIcon icon={faArrowTrendUp} style={{ height:"30px", color:"#5ac53b"}} />
      },
    cryptocurrency: 
      {
        label: "Cryptocurrency",
        icon: <FontAwesomeIcon icon={faBtc} style={{ height:"22px", width:"22px", backgroundColor:"white" , color:"orange", padding:"3px", borderRadius:"20px"}} />
      },
    cannabis: 
      {
        label: "Cannabis",
        icon: <FontAwesomeIcon icon={faCannabis} style={{ height:"30px", color:"#5ac53b"}} />
      },
    healthcare: 
      {
        label: "Healthcare",
        icon: <FontAwesomeIcon icon={faMaskFace} style={{ height:"30px", color:"white"}} />
      },
    etf: 
      {
        label: "ETFs",
        icon: <FontAwesomeIcon icon={faCubes} style={{ height:"30px", color:"gold"}} />
      },
    pharma: 
      {
        label: "Pharmaceutical",
        icon: <FontAwesomeIcon icon={faPrescription} style={{ height:"30px", color:"white"}} />
      },
    vehicles: 
      {
        label: "Vehicles",
        icon: <FontAwesomeIcon icon={faCarAlt} style={{ height:"30px", color:"red"}} />
      },
  }

  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chartContainer">
          <div className="newsfeed__portfolioValues">
            <h1>$1,257,045.78</h1>
            <p> -$307.33 (-0.03%) Today</p>
          </div>
          <div className="newsfeed__chart">
            <Timeline />
          </div>

          <div className="newsfeed__buyingSection">
            <h1> Buying Power</h1>
            <h1> $253.63</h1>
          </div>

          <div className="newsfeed__marketSection">
          <div className="newsfeed__marketNews">
              <p>Markets Closed</p>
              <h1>Summer Vacation</h1>
            </div>
          </div>

          <div className="newsfeed__popularSection">
          <div className="newsfeed__popularIntro">
            <h1>Popular Categories</h1>
            <p>Show More</p>
          </div>

          <div className="newsfeed__popularBadges">
            {Object.keys(topics).map((topic) => (
              <Chip 
                className="topic__badge"
                variant="outlined"
                label={topics[topic].label}
                avatar={topics[topic].icon}
                style={{color:"white", margin:"0 5px 15px 5px", padding:"20px"}}
              />
            ))}
          </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsfeed;