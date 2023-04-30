import "../../CSS/top_product.css";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  ArcElement,
  Tooltip,
} from "chart.js";
import { ReactComponent as Arrow } from "../../SVGs/DownArrow.svg";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  ArcElement,
  Tooltip
);

const Topproduct = () => {
  const data = [
    {
      title: "Basic Tees",
      percentage: "55%",
      color: "#98D89E",
    },
    {
      title: "Custom Short Pants",
      percentage: "31%",
      color: "#F6DC7D",
    },
    {
      title: "Super Hoodies",
      percentage: "14%",
      color: "#EE8484",
    },
  ];
  return (
    <>
      <div className="productContainer">
        <div className="topInternalProductContainer">
          <div className="productHeading">Top Products</div>
          <div className="range">
            <div className="productRange">May-June 2021</div>
            <Arrow />
          </div>
        </div>
        <div className="bottomInternalproductContainer">
          <div style={{ height: "150px", width: "150px" }}>
            <Pie
              data={{
                labels: ["Basic Tees", "custom Short Pants", "Super Hoodies"],
                datasets: [
                  {
                    label: "Data",
                    backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
                    data: [65, 59, 80],
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {data.map((item, index) => (
              <div key={index}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="circle"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className="productLabel">{item.title}</div>
                </div>
                <div className="percentage">{item.percentage}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topproduct;
