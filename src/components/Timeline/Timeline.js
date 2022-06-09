import React, { useState } from "react"
import { Tabs, Tab } from "@mui/material";
import Linegraph from "./../LineGraph/LineGraph"
import "./Timeline.css";

const Timeline = () => {
    const timeTabs = ["LIVE", "1D", "1W", "1M", "3M", "1Y"]
    
    const [tabValue, setTabValue] = useState("LIVE");

    return (
        <>
        <Linegraph />
        <Tabs
            className="customTabs"
            value={tabValue}
            onChange={(e, time) => setTabValue(time)}
            TabIndicatorProps={{
                style: {
                    background: "#5ac53b",
                }
            }}
            >
            {timeTabs.map(
                time => (
                  <Tab
                    label={time}
                    value={time}
                    style={{ color: "white", fontSize:"16px", fontWeight:400
                  }}
                    className={
                      tabValue === time
                        ? "customTabs__itemActive"
                        : "customTabs__item"
                    }
                  />
                )
              )}
        </Tabs>
      </>
    )
}

export default Timeline;