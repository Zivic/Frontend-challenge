import React from "react";
import NewsCard from "./NewsCard";
import Notification from "./Notification";
const Sidebar = () => {
  return <>
    <div className="absolute right-0 box-border m-0  w-5/12  z-10 p-16
    bg-gradient-to-r from-sidebar-gradient-start/75 from-20% to-sidebar-gradient-end/75 backdrop-blur-2xl
    custom-border-2
    ">
      <h1 className=" mt-20 text-white text-3xl">Updates</h1>
      <p className=" mt-10 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sed ut tenetur, voluptates minima facilis veniam libero suscipit facere optio sint corrupti iure harum aliquam quasi aspernatur illo! Aliquid, enim.</p>
      <div className="">
      <div className="absolute w-1 h-2/3 lines ">
      </div>

      <div className="">
      <NewsCard>
        <h2 className="text-white text-xl mb-5">Feature</h2>
        <ul className="text-gray-400 text-xs list-disc ml-4">
          <li>
            Our system has been updated to ensure that it does not return results with banned words.
          </li>
          <li>
            We have added and  image filter detector that works similarly to the image prompt filter.
          </li>
        </ul>
      </NewsCard>
      <NewsCard>
      <h2 className="text-white text-xl mb-5">Feature</h2>
        <ul className="text-gray-400 text-xs list-disc ml-4">
          <li>
            Our system has been updated to ensure that it does not return results with banned words.
          </li>
          <li>
            We have added and  image filter detector that works similarly to the image prompt filter.
          </li>
        </ul>
        <Notification>
          <h2 className="text-white text-xl mb-5">Serendipity Web Design</h2>
          <p className="text-gray-400 text-xs list-disc ml-4">
            Each design will teach different techniques for mobile and web and will have both the User Interface lesson and the Prototyping lesson. Get editable design files for all...
          </p>
          <div className="flex flex-row items-center mt-5 gap-1">
          <img src="/src/assets/react.svg" alt="react.svg" />

          <h3 className=" text-white text-md ">Taught by George Z.</h3>

          </div>


        </Notification>
      </NewsCard>
      <NewsCard>
      <h2 className="text-white text-xl mb-5">Feature</h2>
        <ul className="text-gray-400 text-xs list-disc ml-4">
          <li>
            Our system has been updated to ensure that it does not return results with banned words.
          </li>
          <li>
            We have added and  image filter detector that works similarly to the image prompt filter.
          </li>
        </ul>
      </NewsCard>
      </div>
     </div>
    </div>
  </>;
};
export default Sidebar;
