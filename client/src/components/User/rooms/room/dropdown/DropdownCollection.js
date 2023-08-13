import React, { useState, useEffect, useMemo } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./dropdownCollection.css";

function DropdownCollection() {
  const today = useMemo(() => new Date(), []);

  const tomorrow = useMemo(() => {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);
    return nextDay;
  }, [today]);

  const [checkInDate, setCheckInDate] = useState(today.toDateString());
  const [checkOutDate, setCheckOutDate] = useState(tomorrow.toDateString());
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState("Deluxe Room");
  const [availabilityMessage, setAvailabilityMessage] = useState("");

  useEffect(() => {
    setCheckInDate(today.toDateString());
    setCheckOutDate(tomorrow.toDateString());
  }, [today, tomorrow]);

  const handleRoomTypeChange = (selectedRoomType) => {
    setRoomType(selectedRoomType);
  };

  const handleCheckAvailability = async () => {
    if (checkInDate && checkOutDate) {
      try {
        const response = await fetchAvailabilityData(
          checkInDate,
          checkOutDate,
          adults,
          children,
          roomType
        );
        const availableRooms = response.availableRooms;

        if (availableRooms.length > 0) {
          setAvailabilityMessage(
            `Rooms are available from ${checkInDate} to ${checkOutDate} for ${adults} adults and ${children} children. Room type: ${roomType}. Total available rooms: ${availableRooms.length}`
          );
        } else {
          setAvailabilityMessage(
            "No rooms available for the selected dates and preferences."
          );
        }
      } catch (error) {
        console.error("Error fetching availability data:", error);
        setAvailabilityMessage(
          "An error occurred while fetching availability data."
        );
      }
    } else {
      setAvailabilityMessage(
        "Please select valid check-in and check-out dates."
      );
    }
  };

  const fetchAvailabilityData = async (
    checkIn,
    checkOut,
    adults,
    children,
    roomType
  ) => {
    const apiUrl = ` http://localhost:5010/api/check-availability?checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}&roomType=${roomType}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    return data;
  };
  return (
    <div>
      <div className="dropdown-container">
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown">
              Check In: {checkInDate}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => setCheckInDate(today.toDateString())}
              >
                {today.toDateString()}
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setCheckInDate(tomorrow.toDateString())}
              >
                {tomorrow.toDateString()}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown">
            Check Out: {checkOutDate}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => setCheckOutDate(tomorrow.toDateString())}
            >
              {tomorrow.toDateString()}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                setCheckOutDate(
                  new Date(
                    tomorrow.setDate(tomorrow.getDate() + 1)
                  ).toDateString()
                )
              }
            >
              {new Date(
                tomorrow.setDate(tomorrow.getDate() + 1)
              ).toDateString()}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown">
            Adult
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setAdults(1)}>1</Dropdown.Item>
            <Dropdown.Item onClick={() => setAdults(2)}>2</Dropdown.Item>
            <Dropdown.Item onClick={() => setAdults(3)}>3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown">
            Children
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setChildren(0)}>0</Dropdown.Item>
            <Dropdown.Item onClick={() => setChildren(1)}>1</Dropdown.Item>
            <Dropdown.Item onClick={() => setChildren(2)}>2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown">
            Room
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleRoomTypeChange("Deluxe Room")}>
              Deluxe Room
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleRoomTypeChange("Family Room")}>
              Family Room
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleRoomTypeChange("Couple Room")}>
              Couple Room
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleRoomTypeChange("Single Room")}>
              Single Room
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <button className="button" onClick={handleCheckAvailability}>
          CHECK AVAILABILITY
        </button>{" "}
      </div>
      <div style={{ color: "#d4af37" }}>{availabilityMessage}</div>
    </div>
  );
}

export default DropdownCollection;
