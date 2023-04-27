import React, { useEffect, useState } from "react";
import "../assets/css/loader.css";
function Preloder() {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 4500);
  }, []);
  {
    if (loader === true) {
      document.body.style.overflow = "hidden";
      document.documentElement.scrollTop = 0;
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.scrollTop = 0;
    }
  }
  return (
    <>
      {loader ? (
        <div class="preloader">
          <div class="loader"></div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Preloder;
