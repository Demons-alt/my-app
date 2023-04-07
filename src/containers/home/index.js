/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import moment from "moment/moment";
import Sidebar from "../slidebar";
import profile from "../../assets/images/blank-profile-picture.svg";

function HomePage() {
  const name = "fahmmi";
  const address = "lumajang"

  function getHour() {
    const Hours = moment().format("HH");

    if (Hours >= 3 && Hours < 12) {
      return "Good Morning";
    }
    if (Hours >= 12 && Hours < 15) {
      return "Good Afternoon";
    }
    if (Hours >= 15 && Hours < 20) {
      return "Good Evening";
    }
    if (Hours >= 20) {
      return "Good Nigth";
    }
    if (Hours < 3) {
      return "Good Night";
    }

    return Hours;
  }

  function getDays() {
    const days = moment().day();
    if (days === 1) {
      return "Monday";
    }
    if (days === 2) {
      return "Tuesday";
    }
    if (days === 3) {
      return "Wednesday";
    }
    if (days === 4) {
      return "Thursday";
    }
    if (days === 5) {
      return "Friday";
    }
    if (days === 6) {
      return "Saturday";
    }
    if (days === 7) {
      return "Sunday";
    }
  }

  return (
    <div className="flex">
      <Sidebar />
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-10">
            <h1 className="mt-12 ml-12 text-3xl self-start font-bold dark:text-gray-400">
                {getHour()} 
            </h1>
            <h1 className=" ml-12 text-3xl self-start font-bold dark:text-gray-400">
                Today is {getDays()} {moment().format("DD-MM-YYYY")}
            </h1>
            <img
              class="w-40 h-40 mb-3 mt-12 rounded-full shadow-lg"
              src={profile}
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {name}
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              {address}
            </span>
          </div>
        </div>
      </div>

  );
}

export default HomePage;
