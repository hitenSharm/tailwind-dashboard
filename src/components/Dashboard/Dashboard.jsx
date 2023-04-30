import { Sidebar } from "./Sidebar";
import "../../CSS/dashboard.css";
import Header from "../Header/Header";
import Card from "../Cards/Card";
import Graph from "../Activities/Graphs";
import Topproduct from "../Product/Topprod";
import Schedule from "../Schedule/Schedule";

export const Dashboard = () => {
  return (
    <>
      <div className="flex-container">
        <Sidebar />
        <div className="m-5 w-screen">
          <Header />
          <Card/>
          <Graph/>
          <div className="flex justify-evenly">
          <Topproduct/>
          <Schedule/>
          </div>
        </div>
      </div>
    </>
  );
};
