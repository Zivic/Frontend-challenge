import React from "react";

const FloatItem = (props) => {
  return (
    <>
      <div className=" flex  px-5 mt-2 align-middle">
      <img className="w-24 h-24 " src={props.imgsrc} alt="book.svg" />
        <div className="my-auto ">
        {props.children}
        </div>
      </div>
      {!props.last && <div className=" w-4/5 h-1 rounded-lg mx-auto blur-sm
       bg-gradient-to-r from-purple-600 to-purple-300
      ">
      </div>}

    </>
  );
};
export default FloatItem;
