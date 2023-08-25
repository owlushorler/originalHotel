import React, { useState, useEffect } from "react";
import "./viewCustomers.css";
import Reservation from "./data.json";

const itemsPerPage = 4;

const ViewCustomers = () => {
  const [loading, setLoading] = useState(true);
  const [reservations, setReservations] = useState([]);
  // const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  // const [reservationToDelete, setReservationToDelete] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setReservations(Reservation);
      setLoading(false);
    }, 1000);
  }, []);

  // const handleDeleteConfirmation = (reservation) => {
  //   setReservationToDelete(reservation);
  //   setShowDeleteConfirmation(true);
  // };

  // const handleDeleteCancel = () => {
  //   setShowDeleteConfirmation(false);
  //   setReservationToDelete(null);
  // };

  // const handleDeleteConfirm = () => {
  //   if (reservationToDelete) {
  //     const updatedReservations = reservations.filter(
  //       (r) => r.id !== reservationToDelete.id
  //     );
  //     setReservations(updatedReservations);
  //     setShowDeleteConfirmation(false);
  //     setReservationToDelete(null);
  //   }
  // };

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredReservations, setFilteredReservations] = useState([]);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredReservations([]);
      setError(null);
    } else {
      const filtered = reservations.filter((reservation) =>
        reservation.customerName
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
      setFilteredReservations(filtered);

      if (filtered.length === 0) {
        setError("No results found. Please enter a valid name.");
      } else {
        setError(null);
      }
    }
  };

  const [sortCriteria, setSortCriteria] = useState("customerName");
  const sortedReservations = [...reservations].sort((a, b) =>
    a[sortCriteria].localeCompare(b[sortCriteria])
  );

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedReservations = sortedReservations.slice(startIndex, endIndex);

  return (
    <div>
      <div className="abu-reserve-parent">
        <h2 className="abu-reservation">Customer Reservations</h2>
        {loading ? (
          <p className="abu-loading">Loading...</p>
        ) : (
          <div className="abu-div-input">
            <input
              className="abu-search-input"
              type="text"
              placeholder="Search by Customer Name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch} className="abu-search-bar">
              Search
            </button>
            {!searchQuery && (
              <button
                className={`abubakar ${
                  sortCriteria === "customerName" ? "active" : ""
                } ${searchQuery ? "button-hidden" : ""}`}
                onClick={() => setSortCriteria("customerName")}
              >
                Sort by Customer Name
              </button>
            )}
          </div>
        )}
        {error && <p className="abu-error-msg">{error}</p>}
        <table className="abu-tabularForm">
          <thead>
            <tr className="abu-tabular-head">
              <th>Reservation ID</th>
              <th>Customer Name</th>
              <th>Check-in Date</th>
              <th>Check-ot Date</th>
              <th>Number of Adults</th>
              <th>Number of Children</th>
              <th>Room Type</th>
              <th>Payment Status</th>
              <th>Contact Email</th>
              <th>Total Cost</th>
              <th>Booking Date</th>
              <th>Notes</th>
              <th>Payment Method</th>
            </tr>
          </thead>

          <tbody>
            {searchQuery
              ? filteredReservations.map((reservation) => (
                  <tr key={reservation.id}>
                    <td>{reservation.id}</td>
                    <td>{reservation.customerName}</td>
                    <td>{reservation.checkInDate}</td>
                    <td>{reservation.checkOutDate}</td>
                    <td>{reservation.numberOfAdults}</td>
                    <td>{reservation.numberOfChildren}</td>
                    <td>{reservation.roomType}</td>
                    <td>{reservation.paymentStatus}</td>
                    <td>{reservation.contactEmail}</td>
                    <td>#{reservation.totalCost.toFixed(2)}</td>
                    <td>{reservation.bookingDate}</td>
                    <td>{reservation.notes}</td>
                    <td>{reservation.paymentMethod}</td>
                   
                  </tr>
                ))
              : displayedReservations.map((reservation) => (
                  <tr key={reservation.id}>
                    <td>{reservation.id}</td>
                    <td>{reservation.customerName}</td>
                    <td>{reservation.checkInDate}</td>
                    <td>{reservation.checkOutDate}</td>
                    <td>{reservation.numberOfAdults}</td>
                    <td>{reservation.numberOfChildren}</td>
                    <td>{reservation.roomType}</td>
                    <td>{reservation.paymentStatus}</td>
                    <td>{reservation.contactEmail}</td>
                    <td>#{reservation.totalCost.toFixed(2)}</td>
                    <td>{reservation.bookingDate}</td>
                    <td>{reservation.notes}</td>
                    <td>{reservation.paymentMethod}</td>
                   
                  </tr>
                ))}
          </tbody>
        </table>

        {/* {showDeleteConfirmation && (
        <div className="abu-modal">
          <div className="abu-modal-content">
            <p>Are you sure you want to delete this reservation?</p>
            <button onClick={handleDeleteConfirm}>Yes</button>
            <button onClick={handleDeleteCancel}>No</button>
          </div>
        </div>
      )} */}

        <div className="abu-pagination">
          <button onClick={() => setCurrentPage(currentPage - 1)}>
            previous
          </button>
          <span>{currentPage}</span>
          <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </div>
      </div>
    </div>
  );
};
export default ViewCustomers;
