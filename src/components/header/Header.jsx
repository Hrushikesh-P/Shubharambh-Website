import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { Navigate, useNavigate } from "react-router-dom";


const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  const handleRegister = () => {
    navigate("/Login", { state: { destination, date, options } });
  };

  

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            {/* <FontAwesomeIcon icon={faBed} /> */}
            <span>Wedding Hall</span>
          </div>
          <div className="headerListItem">
            {/* <FontAwesomeIcon icon={faPlane} /> */}
            <span>Decorators</span>
          </div>
          <div className="headerListItem">
            {/* <FontAwesomeIcon icon={faCar} /> */}
            <span>Caterers</span>
          </div>
          <div className="headerListItem">
            {/* <FontAwesomeIcon icon={faBed} /> */}
            <span>Orchestra</span>
          </div>
          <div className="headerListItem">
            {/* <FontAwesomeIcon icon={faTaxi} /> */}
            <span>Pandit</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
            Creativity & innovation is to events, what the heart & soul is to the living.
            </p>
            <button className="headerBtn" onClick={handleRegister}>Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                {/* <FontAwesomeIcon icon={faBed} className="headerIcon" /> */}
                <input
                  type="text"
                  placeholder="Where are you planning?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                {/* <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" /> */}
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch} >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
