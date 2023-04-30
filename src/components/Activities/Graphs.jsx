import "../../CSS/activities.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
  Tooltip,
} from "chart.js";
import { ReactComponent as Arrow } from "../../SVGs/DownArrow.svg";
import { useState } from "react";
import { useEffect } from "react";
import { getNumbers } from "../../api/numbers";
import { useRef } from "react";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
  Tooltip
);

const Graph = () => {
  const [numbers, setNumbers] = useState([0, 0, 0, 0]);
  const [numbersSecond, setNumbersSecond] = useState([0, 0, 0, 0]);
  const [loadingState, setLoading] = useState(true);
  const effectRan=useRef(false);
  
  useEffect(() => {
    if(effectRan.current===false){
      getNumbers().then((data) => {
        setNumbers(data);
      });
      getNumbers().then((data) => {
        setNumbersSecond(data);
        setLoading(false);        
      });
    }
    return () =>{
      effectRan.current=true;
    }
  }, []);

  return (
    <>
      <div className="activityContainer">
        <div className="activityTitle">Activities</div>
        <div className="activityInnerContainer">
          <div className="activityRange">May-June 2021</div>
          <Arrow />
        </div>
        {loadingState === true ? (
          <>Loading Data...</>
        ) : (
          <>
            <div style={{ height: "350px", width: "100%" }}>
              <Line
                data={{
                  labels: ["week1", "week2", "week3", "week4"],
                  datasets: [
                    {
                      label: "Guest",
                      backgroundColor: "#9BDD7C",
                      data: numbers,
                      borderColor: "#9BDD7C",
                      fill: false,
                      tension: 0.4,
                    },
                    {
                      label: "User",
                      data: numbersSecond,
                      fill: false,
                      backgroundColor: "#E9A0A0",
                      borderColor: "#E9A0A0",
                      tension: 0.4,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  scales: {
                    x: {
                      beginAtZero: true,
                      grid: {
                        display: false,
                      },
                    },
                    y: {
                      suggestedMin: 0,
                      suggestedMax: 1000,
                    },
                  },
                  plugins: {
                    legend: {
                      display: true,
                      position: "top",
                      align: "end",
                      labels: {
                        usePointStyle: true,
                        boxWidth: 6,
                        padding: 35,
                      },
                    },
                  },
                  elements: {
                    point: {
                      radius: 0,
                    },
                  },
                }}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Graph;
