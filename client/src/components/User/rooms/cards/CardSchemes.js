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



import card1Image from "../../../imagesfolder/deluxe-room-king-1-2000px.jpg";
import card2Image from "../../../imagesfolder/singles.jpg";
import card3Image from "../../../imagesfolder/family.jpg";
import card4Image from "../../../imagesfolder/single1.jpg";
import card5Image from "../../../imagesfolder/deluxee.jpeg";
import card6Image from "../../../imagesfolder/couple.jpg";
import card7Image from "../../../imagesfolder/cuple.jpg";
import card8Image from "../../../imagesfolder/singling.jpg";
import card9Image from "../../../imagesfolder/fami.jpg";

function CardSchemes() {
  const cardData = [
    {
      title: "Deluxe Room",
      imageSrc: card1Image,
      persons: "4 Persons",
    },
    {
      title: "Single Room",
      imageSrc: card2Image,
      persons: "2 Persons",
    },
    {
      title: "Family Room",
      imageSrc: card3Image,
      persons: "4 Persons",
    },
    {
      title: "Couple Room",
      imageSrc: card4Image,
      persons: "2 Persons",
    },
    {
      title: "Deluxe Room",
      imageSrc: card5Image,
      persons: "4 Persons",
    },
    {
      title: "Couple Room",
      imageSrc: card6Image,
      persons: "2 Persons",
    },
    {
      title: "Deluxe Room",
      imageSrc: card7Image,
      persons: "4 Persons",
    },
    {
      title: "Single Room",
      imageSrc: card8Image,
      persons: "2 Persons",
    },
    {
      title: "Family Room",
      imageSrc: card9Image,
      persons: "4 Persons",
    },
  ];

  return (
    <div className="card-grid">
      {cardData.map((card, index) => (
        <Card key={index} style={{ width: "20rem" }} className="card-scheme">
          <Card.Img
            variant="top"
            src={card.imageSrc}
            style={{ height: "13rem" }}
          />
          <Card.Body>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="title-price">
              <Card.Title className="card-title">{card.title}</Card.Title>
              <p className="para">
                <span
                  style={{
                    color: "#d4af37",
                    fontStyle: "bolder",
                    fontSize: "20px",
                  }}
                >
                  $220
                </span>
                /Per Night
              </p>
            </div>
            <div className="font-container">
              <div>
                <FontAwesomeIcon
                  className="font"
                  icon={faUserFriends}
                  size="lg"
                />{" "}
                <p>{card.persons}</p>
              </div>
              <div>
                <FontAwesomeIcon
                  className="font"
                  icon={faBed}
                  size="lg"
                  style={{
                    paddingLeft: "8px",
                  }}
                />
                <p
                  style={{
                    fontSize: "13px",
                    // width: "100px",
                    paddingLeft: "5px",
                  }}
                >
                  King Size Bed{" "}
                </p>
              </div>
            </div>
            <div className="font-container">
              <div>
                <FontAwesomeIcon className="font" icon={faWifi} size="lg" />
                <p>Free Wifi Zone </p>
              </div>
              <div>
                <FontAwesomeIcon
                  className="font"
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

            <button className="link-button">
              <Link style={{textDecoration: "none", color: "black"}} to="/booking">
                BOOKING NOW
              </Link>
            </button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardSchemes;

