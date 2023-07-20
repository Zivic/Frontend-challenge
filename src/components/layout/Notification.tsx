import React from "react";

const Notification = (props) => {
  return (
    <>
    <div>
      <div
        className=" p-6 mt-6 w-3/4 rounded-2xl
      custom-border-notification
    "
      >
        {props.children}
      </div>
      </div>
    </>
  );
};

export default Notification;
