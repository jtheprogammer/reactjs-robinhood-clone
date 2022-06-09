import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-moment";
import {
  Chart as ChartJS,
  CategoryScale,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  } from 'chart.js';
  import "./LineGraph.css"
  
ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: {
      display: false
    }
  },
  Tooltip : {
    mode: "index",
    intersect: false
  },
  hover: {
    intersect: false
  },
  elements: {
    point: {
      radius: 15,
    },
  },
  maintainAspectRatio: false,
  scales: {
    y: {
      gridlines: {
        display: false,
      },
      ticks: {
        display: false
      }
    },
    x: {
      type: "time",
      ticks: {
        display: false
      },
      min: Date,
    }
  },
};

const LineGraph = () => {
  const [ graphData, setGraphData ] = useState({});
  const [ timeOptions, setTimeOptions ] = useState(options); 

  const createMockData = () => {
    let data = [];
    let value = 50;
    for(let i = 0; i < 366; i++){
      let date = new Date();
      date.setHours(0,0,0,0);
      date.setDate(i);
      value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
      data.push({x: date, y: value});
    }
    setGraphData(data); 
  }

  useEffect(() => {
    createMockData();
    setTimeOptions(options)
  }, []);

  return (
    <div className="linegraph">
        <Line
          data={{
            datasets: [
              {
                data: graphData,
                yAxisID: "y",
                xAxisID: "x",
                label: "Test",
                type: 'line',
                backgroundColor: "black",
                borderColor: "#5AC53B",
                borderWidth: 2,
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                pointHoverBackgroundColor: '#5AC53B',
                pointHoverBorderColor: '#000000',
                pointHoverBorderWidth: 6,
                pointHoverRadius: 10,
              },
            ],
          }}
          options={timeOptions}
        />
    </div>
  );
}

export default LineGraph;
