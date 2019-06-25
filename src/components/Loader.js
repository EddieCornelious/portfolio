import "../styles/Loader.scss";
import React from "react";

const Loader = () => {
  return (
    <div class="loader-container">
      <div class="loader">
        <div class="inner one" />
        <div class="inner two" />
        <div class="inner three" />
      </div>
    </div>
  );
};

export default Loader;
