import React from "react";

const NewsCard = (props) => {
    console.log(props)
    return (
        <>
        <div className="rounded-3xl mt-10 custom-border">

        <div className=" bg-gradient-to-r from-transparent to-card-gradient-end rounded-3xl">
            <img src="/src/assets/arrow.png" alt="book.svg"  className="absolute -translate-x-10 translate-y-5 w-auto h-auto max-w-[5rem]"/>
            <div className=" px-12 py-5">
            {props.children}
            </div>
        </div>
        </div>

        </>
    )
}

export default NewsCard;