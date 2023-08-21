import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faUserFriends,
  faBed,
  faWifi,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";

import "./cardSchemes.css";

import card1Image from "../images/deluxe-room-king-1-2000px.jpg";
import card2Image from "../images/singles.jpg";
import card3Image from "../images/family.jpg";
import card4Image from "../images/single1.jpg";
import card5Image from "../images/deluxee.jpeg";
import card6Image from "../images/couple.jpg";
import card7Image from "../images/cuple.jpg";
import card8Image from "../images/singling.jpg";
import card9Image from "../images/fami.jpg";

function CardSchemes() {
  const abuCardData = [
    {
      abuTitle: "Deluxe Room",
      abuImageSrc: card1Image,
      abuPersons: "4 Persons",
      abuCash: "$440",
    },
    {
      abuTitle: "Single Room",
      abuImageSrc: card2Image,
      abuPersons: "2 Persons",
      abuCash: "$220",
    },
    {
      abuTitle: "Family Room",
      abuImageSrc: card3Image,
      abuPersons: "4 Persons",
      abuCash: "$440",
    },
    {
      abuTitle: "Couple Room",
      abuImageSrc: card4Image,
      abuPersons: "2 Persons",
      abuCash: "$220",
    },
    {
      abuTitle: "Deluxe Room",
      abuImageSrc: card5Image,
      abuPersons: "4 Persons",
      abuCash: "$440",
    },
    {
      abuTitle: "Couple Room",
      abuImageSrc: card6Image,
      abuPersons: "2 Persons",
      abuCash: "$220",
    },
    {
      abuTitle: "Deluxe Room",
      abuImageSrc: card7Image,
      abuPersons: "4 Persons",
      abuCash: "$440",
    },
    {
      abuTitle: "Single Room",
      abuImageSrc: card8Image,
      abuPersons: "2 Persons",
      abuCash: "$220",
    },
    {
      abuTitle: "Family Room",
      abuImageSrc: card9Image,
      abuPersons: "4 Persons",
      abuCash: "$440",
    },
  ];

  return (
    <div className="abu-card-grid">
      {abuCardData.map((card, index) => (
        <Card
          abu
          key={index}
          style={{
            width: "20rem",
            backgroundColor: "#efece3",
            height: "33rem",
          }}
          className="abu-card-scheme"
        >
          <Card.Img
            abu
            variant="top"
            src={card.abuImageSrc}
            style={{ height: "13rem" }}
            className="abu-card-image"
          />
          <Card.Body abu>
            <div className="abu-rating">
              <FontAwesomeIcon abu icon={faStar} />
              <FontAwesomeIcon abu icon={faStar} />
              <FontAwesomeIcon abu icon={faStar} />
              <FontAwesomeIcon abu icon={faStar} />
              <FontAwesomeIcon abu icon={faStar} />
            </div>
            <div className="abu-title-price">
              <Card.Title className="abu-card-title">
                {card.abuTitle}
              </Card.Title>
              <p className="abu-pop">
                <span className="highlighted-text">{card.abuCash}</span>
                <span className="per-night"> /Per Night</span>
              </p>
            </div>
            <div className="abu-font-container">
              <div>
                <FontAwesomeIcon
                  abu
                  className="abu-font"
                  icon={faUserFriends}
                  size="lg"
                />{" "}
                <p>{card.abuPersons}</p>
              </div>
              <div style={{}}>
                <FontAwesomeIcon
                  abu
                  className="abu-font"
                  icon={faBed}
                  size="lg"
                  style={{
                    paddingRight: "8px",
                  }}
                />
                <p
                  style={{
                    fontSize: "13px",
                    paddingLeft: "5px",
                  }}
                >
                  King Size Bed{" "}
                </p>
              </div>
            </div>
            <div className="abu-font-container">
              <div>
                <FontAwesomeIcon
                  abu
                  className="abu-font"
                  icon={faWifi}
                  size="lg"
                />
                <p>Free Wifi Zone </p>
              </div>
              <div>
                <FontAwesomeIcon
                  abu
                  className="abu-font"
                  icon={faSquare}
                  size="lg"
                  style={{
                    marginRight: "15px",
                    color: "#d4af37",
                  }}
                />
                <p>36 Sqm </p>
              </div>
            </div>

            <button className="abu-cardBtn">
              <Link to="/booking" className="abu-cardBtn-refer">
                BOOK NOW
              </Link>
            </button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardSchemes;
