// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { useNavigate } from "react-router-dom";
import hood2 from "../Bilder/rich.jpg";

const Welcome = () => {
  const isLoggedIn = localStorage.getItem("login");
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/");
    return null;
  }
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center h-screen "
        style={{ backgroundImage: `url(${hood2})` }}
      >
      <div className="flex justify-center items-center py-96">
        <div className="p-6 py-12 dark:text-gray-100">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-6xl tracki font-bold">Welcome</h2>

              <Link
                to="/"
                className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
              >
                Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>

      <Footer />
    </>
  );
};
export { Welcome };
