import React, { useState } from "react";
import "./subscriptionForm.css";

function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = async () => {
    if (email) {
      try {
        const response = await fetch(
          " http://localhost:5010/api/subscription",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );

        if (response.ok) {
          setIsSubscribed(true);
          setError(null);
        } else {
          setError("Failed to subscribe. Please try again later");
        }
      } catch (error) {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="su">
      <p>GET UPDATE</p>
      <h3>Get Latest Updates And Deals</h3>
      <div className="sub">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <button className="subscription-button" onClick={handleSubscribe}>
          Subscribe
        </button>
        {isSubscribed && <p className="success-message">You are subscribed!</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default SubscriptionForm;
