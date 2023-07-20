import React from "react";
import FloatItem from "./FloatItem";
const FloatMenu = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0  rounded-xl custom-border-notification">
        <FloatItem imgsrc="/src/assets/book.svg">
          <h2>Explore</h2>
          <p>Explore the Serenity community's favorite images.</p>
        </FloatItem>
        <FloatItem imgsrc="/src/assets/sparkers.svg">
          <h2>Discord</h2>
          <p>Connect with the community.</p>
        </FloatItem>
        <FloatItem last="true" imgsrc="/src/assets/square_star.svg">
          <h2>Account</h2>
          <p>View your account information and subscription plans.</p>
        </FloatItem>
      </div>
    </>
  );
};

export default FloatMenu;
