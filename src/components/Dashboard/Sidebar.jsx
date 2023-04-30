import { useState } from "react";
import "../../CSS/sidebar.css"
import {ReactComponent as Dashboard} from "../../SVGs/dashboard_icon.svg"
import { ReactComponent as Schedule } from "../../SVGs/schedule_icon.svg";
import { ReactComponent as Setting } from "../../SVGs/setting_icon.svg";
import { ReactComponent as Transaction } from "../../SVGs/transaction_icon.svg";
import { ReactComponent as User } from "../../SVGs/user_icon.svg";

export const Sidebar = () => {
    const [selected, setSelected] = useState("Dashboard");
    const data = [
      {
        title: "Dashboard",
        icon: (props) => <Dashboard {...props} />,
      },
      {
        title: "Transactions",
        icon: (props) => <Transaction {...props} />,
      },
      {
        title: "Schedules",
        icon: (props) => <Schedule {...props} />,
      },
      {
        title: "Users",
        icon: (props) => <User {...props} />,
      },
      {
        title: "Settings",
        icon: (props) => <Setting {...props} />,
      },
    ];
    return (
      <>      
        <div className="sidebarOuterContainer">
          <div className="sidebarTitle">Board.</div>
          <div className="sidebarInnerContainer">
            <div>
              {data.map((item, index) => (
                <div
                  className="sidebarTitleContainer"
                  key={index}
                  onClick={() => setSelected(item.title)}
                  s
                >
                  <item.icon />
                  <div
                    className="sidebarNavigationTitle"
                    style={{
                      fontWeight: selected === item.title ? "700" : "400",
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="sidebarBottomTitle">Help</div>
              <div className="sidebarBottomTitle">Contact Us</div>
            </div>
          </div>
        </div>
      </>
    );
  };
  