import React, { useEffect } from "react";

const Calendly = ({ meeturl }) => {
  useEffect(() => {
    //ughhhhh
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    //  returning children of script papa
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    //returning div bachha
    <div>
      <div
        className="calendly-inline-widget"
        data-url={meeturl}
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
};

export default Calendly;
