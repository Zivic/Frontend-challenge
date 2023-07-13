import React from "react";

const NewsCard = (props) => {
    console.log(props)
    return (
        <>
        <div className="rounded-3xl mt-10 custom-border">

        <div className=" bg-gradient-to-r from-transparent to-card-gradient-end rounded-3xl">
            <img src="/src/assets/book.svg" alt="book.svg"  className=" "/>
            {props.children}
        </div>
        </div>

        </>
    )
}

export default NewsCard;