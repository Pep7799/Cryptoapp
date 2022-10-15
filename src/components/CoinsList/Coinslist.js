import React from "react";
import "./Coinslist.css";

const Coinslist = ({ dollar }) => {
  return (
    <div className="coin-row">
      <p className="coin-number">{dollar.market_cap_rank}</p>

      <div className="coin-description">
        <img src={dollar.image} alt="coins" className="coin-image" />
        <span>{dollar.name}</span>
        <span> | </span>
        <span>{dollar.symbol.toUpperCase()}</span>
      </div>
      <p className="last-price">${dollar.current_price.toLocaleString()}</p>

      {dollar.price_change_percentage_24h < 0 ? (
        <p className="change red">
          {dollar.price_change_percentage_24h.toFixed(2)}%
        </p>
      ) : (
        <p className="change green">
          {dollar.price_change_percentage_24h.toFixed(2)}%
        </p>
      )}
      <p>${dollar.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default Coinslist;
