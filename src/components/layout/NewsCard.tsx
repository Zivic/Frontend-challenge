import React from "react";

const NewsCard = (props) => {
    console.log(props)
    return (
        <>
        <div className=" bg-gradient-to-r from-transparent to-gray-900/75 rounded-3xl mt-10">
            <img src="/src/assets/book.svg" alt="book.svg"  className=" "/>
            {props.children}
        </div>
        </>
    )
}

export default NewsCard;