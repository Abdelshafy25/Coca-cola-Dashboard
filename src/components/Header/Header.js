import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

import "./header.css";
import { useState } from "react";

export function Header({ handleLineDetails }) {
  const [active, setActive] = useState(0);
  return (
    <div className="header">
      <div className="group-left">
        <div className="factory-selection">
          <svg
            className="plant"
            id="planet"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
          >
            <path
              id="Path_688"
              data-name="Path 688"
              d="M0,0H24V24H0Z"
              fill="none"
            />
            <path
              id="Path_689"
              data-name="Path 689"
              d="M18.816,13.58c2.292,2.138,3.546,4,3.092,4.9-.745,1.46-5.783-.259-11.255-3.838s-9.3-7.664-8.56-9.123c.464-.91,2.926-.444,5.8.8"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <circle
              id="Ellipse_269"
              data-name="Ellipse 269"
              cx="7"
              cy="7"
              r="7"
              transform="translate(5 5)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
          </svg>
          <select value="All Factories">
            <option value="All Factories">All Factories</option>
            <option value="Factory Name">Factory name</option>
            <option value="Factory Name">Factory name</option>
            <option value="Factory Name">Factory name</option>
          </select>
        </div>
        <div className="line" onClick={handleLineDetails}>
          <svg
            id="line"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
          >
            <path
              id="Path_693"
              data-name="Path 693"
              d="M0,0H24V24H0Z"
              fill="none"
            />
            <circle
              id="Ellipse_271"
              data-name="Ellipse 271"
              cx="2"
              cy="2"
              r="2"
              transform="translate(4 17)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <circle
              id="Ellipse_272"
              data-name="Ellipse 272"
              cx="2"
              cy="2"
              r="2"
              transform="translate(16 3)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <path
              id="Path_694"
              data-name="Path 694"
              d="M12,19h4.5a3.5,3.5,0,1,0,0-7h-8a3.5,3.5,0,1,1,0-7H12"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
          </svg>
        </div>
        <div className="function">
          <svg
            id="machines"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              id="Path_690"
              data-name="Path 690"
              d="M0,0H24V24H0Z"
              fill="none"
            />
            <path
              id="Path_691"
              data-name="Path 691"
              d="M4,13a8,8,0,0,1,7,7,6,6,0,0,0,3-5,9,9,0,0,0,6-8,3,3,0,0,0-3-3,9,9,0,0,0-8,6,6,6,0,0,0-5,3"
              fill="none"
              stroke="#2c3e50"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <path
              id="Path_692"
              data-name="Path 692"
              d="M7,14a6,6,0,0,0-3,6,6,6,0,0,0,6-3"
              fill="none"
              stroke="#2c3e50"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <circle
              id="Ellipse_270"
              data-name="Ellipse 270"
              cx="1"
              cy="1"
              r="1"
              transform="translate(14 8)"
              fill="none"
              stroke="#2c3e50"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
          </svg>
        </div>
      </div>
      <div className="group-right">
        <div className="select-day">
          <div
            className={active === 0 ? "active" : ""}
            onClick={() => setActive(0)}
          >
            Today
          </div>
          <div
            className={active === 1 ? "active" : ""}
            onClick={() => setActive(1)}
          >
            Yesterday
          </div>
          <div
            className={active === 2 ? "active" : ""}
            onClick={() => setActive(2)}
          >
            Last Weack
          </div>
        </div>
        <div className="date-icon">
          <FontAwesomeIcon
            icon={faCalendar}
            size="lg"
            style={{ color: "#B2BEC3" }}
          />
        </div>
      </div>
    </div>
  );
}
