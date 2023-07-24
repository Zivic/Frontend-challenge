import React from "react";
import NewsCard from "./NewsCard";
import Notification from "./Notification";
const Sidebar = () => {
  return (
    <>
      <div
        className="fixed  max-h-screen md:fixed md:right-0 md:top-0 md:bottom-0 md:overflow-y-scroll box-border m-0  md:w-5/12 md:h-full 
         h-auto z-10 p-16 overflow-y-auto
    bg-gradient-to-r from-sidebar-gradient-start/75 from-20% to-sidebar-gradient-end/75 backdrop-blur-2xl
    custom-border-sidebar
    "
      >
        <h1 className=" mt-20 text-white text-4xl font-semibold">Updates</h1>
        <p className=" mt-10 text-gray-400">
          Stay up-to-date with the latest features released on Serendipity. Our
          most recent updates are now live, offering you a wide range of new
          features and enhancements that will enhance your experience. From
          sleek design changes to powerful new tools, we are continuously
          working to make our platform even better for you. Discover the latest
          updates today and take your experience to the next level!
        </p>
        <div className="">
          <div className="absolute w-1 h-5/6 lines "></div>

          <div className="">
            <NewsCard imgsrc="/src/assets/box.png">
              <h2 className="text-white text-xl ">Feature</h2>
              <h3 className="text-sm text-gray-400">
                {" "}
                <span className=" text-blue-400">/DESCRIBE</span> RELEASED -
                APRIL 21 2023
              </h3>
              <ul className="text-gray-400 text-xs list-disc ml-4 mt-5">
                <li>
                  Our system has been updated to ensure that it does not return
                  results with banned words.
                </li>
                <li>
                  We have added and image filter detector that works similarly
                  to the image prompt filter.
                </li>
              </ul>
            </NewsCard>
            <NewsCard imgsrc="/src/assets/panel.png">
              <h2 className="text-white text-xl ">Course</h2>
              <h3 className="text-sm text-gray-400">
                {" "}
                <span className=" text-blue-400">/OPTIMUS WEB DESIGN</span> RELEASED -
                APRIL 20 2023
              </h3>
              <ul className="text-gray-400 text-xs list-disc ml-4 mt-5">
                <li>
                  Released new tutorial courses for prompting and design.
                </li>
                <li>
                  Updated content list and documentation.
                </li>
              </ul>
              <Notification>
                <h2 className="text-white text-xl mb-5">
                  Serendipity Web Design
                </h2>
                <p className="text-gray-400 text-xs list-disc ml-4">
                  Each design will teach different techniques for mobile and web
                  and will have both the User Interface lesson and the
                  Prototyping lesson. Get editable design files for all...
                </p>
                <div className="flex flex-row items-center mt-5 gap-2">
                  <img src="/src/assets/avatar.png" alt="avatar.png" />

                  <h3 className=" text-white text-md ">Taught by George Z.</h3>
                </div>
                <button className="custom-button-explore py-1 px-6 mt-5 drop-shadow-xl text-white font-medium ">
                  <span className=" text-xl mr-2 p-0 text-gray-400">→</span>
                  Explore feature
                </button>
              </Notification>
            </NewsCard>
            <NewsCard imgsrc="/src/assets/bugfix.png">
              <h2 className="text-white text-xl">Feature</h2>
              <h3 className="text-sm text-gray-400">
                {" "}
                <span className=" text-blue-400">/VATIATIONS</span>{" "}
                FIXED - APRIL 19 2023
              </h3>
              <ul className="text-gray-400 text-xs list-disc ml-4 mt-5">
                <li>
                  Variations on image prompts without text prompts now work
                  again.
                </li>
                <li>Using the X reaction emote to delete job works again </li>
              </ul>
            </NewsCard>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
