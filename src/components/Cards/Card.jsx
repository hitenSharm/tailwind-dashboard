import { ReactComponent as User } from "../../SVGs/User.svg";
import { ReactComponent as Like } from "../../SVGs/Like.svg";
import { ReactComponent as Revenue } from "../../SVGs/Revenue.svg";
import { ReactComponent as Transaction } from "../../SVGs/Transaction.svg";
import "../../CSS/card.css";
import { useEffect } from "react";
import { getNumbers } from "../../api/numbers";
import { useState } from "react";
import { useRef } from "react";

const Card = () => {
  const [numbers, setNumbers] = useState([0, 0, 0, 0]);
  const [loadingState,setLoading] = useState(true);
  const effectRan=useRef(false);
  useEffect(() => {
    if(effectRan.current===false){
      getNumbers().then((data) => {
        setNumbers(data);
        setLoading(false);
      });
    }

    return () =>{
      effectRan.current=true;
    }
  }, []);

  const cardData = [
    {
      title: "Total Revenues",
      icon: (props) => <Revenue {...props} />,
      color: "#DDEFE0",
    },
    {
      title: "Total Transactions",
      icon: (props) => <Transaction {...props} />,
      color: "#F4ECDD",
    },
    {
      title: "Total Likes",
      icon: (props) => <Like {...props} />,
      color: "#EFDADA",
    },
    {
      title: "Total Revenues",
      icon: (props) => <User {...props} />,
      color: "#DEE0EF",
    },
  ];
  return (
    <>
      <div className="cardOuterContainer">
        {cardData.map((item, index) => (
          <div
            className="cardContainer"
            style={{ backgroundColor: item.color }}
            key={index}
          >
            <div className="cardInnerContainer">
              <div className="cardTitle">{item.title}</div>
              <div className="cardNumber">{loadingState===true ? "Loading" : numbers[index]}</div>
            </div>
            <item.icon />
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
