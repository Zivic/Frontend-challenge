import React from "react";

const Notification = (props) => {
  return (
    <>
      <div
        className=" p-6 mt-6 w-3/4 rounded-lg
    bg-gradient-to-br from-notification-gradient-start from-20% to-transparent  custom-border-4
    "
      >
        {props.children}
      </div>
    </>
  );
};

export default Notification;
