import React from "react";
import { InlineWidget } from "react-calendly";
const Schedule_meet = () => {
  return (
    <div>
      <div className="h-[800px] w-full">
         <InlineWidget
        url="https://calendly.com/harshityadav-mits/"
        styles={{ height: '100%', border: 'none' }}
        pageSettings={{
          backgroundColor: '#000000',  // light gray background
          primaryColor: '#000000',     // button and link color
          textColor: '#000000',        // text color
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
        }}
      />
      </div>
    </div>
  );
};

export default Schedule_meet;
