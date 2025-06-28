import React from "react";
import { InlineWidget } from "react-calendly";
import { useLocation } from "react-router-dom";

const Schedule_meet = () => {
  const { meeting_url } = useLocation().state || {};
  console.log(meeting_url);
  return (
    <div className="h-screen flex">
      {meeting_url ? (
        <div className="h-150 w-250 m-auto">
          <InlineWidget
            url={meeting_url}
            styles={{ height: "100%", border: "none" }}
            pageSettings={{
              backgroundColor: "#1A1A1A", // dark gray instead of pitch black
              primaryColor: "#6366F1", // indigo-500 (great accent)
              textColor: "#FFFFFF", // white text
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
            }}    
            
          />
        </div>
      ) : (
        "null  "
      )}
    </div>
  );
};

export default Schedule_meet;
