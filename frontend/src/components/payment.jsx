import { Navbar } from "./navbar";
import { Footer } from "./footer";
import hood3 from "../Bilder/hood3.jpg";
import { Link } from "react-router-dom";
import { Del } from "./del-mess";
import { FiCreditCard, FiDisc } from "react-icons/fi";
import { SiKlarna } from "react-icons/si";

function Payment() {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center h-screen "
        style={{ backgroundImage: `url(${hood3})` }}
      >
        <div className="flex justify-center items-center py-48">
          <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
            <h2 className="mb-3 text-3xl font-semibold text-center">
              Choose your payment plan
            </h2>
            <p className=" text-center text-xs dark:text-gray-400">Note! The information is not saved.</p>
            <div className="my-6 space-y-4">
            <Link to={"/Del"} element={<Del/>}>
              <button
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri"
              >
                <FiDisc/>
                <p>Swish</p>
              </button>
              </Link>
              <Link to={"/Del"} element={<Del/>}>
              <button
                aria-label="Login with GitHub"
                role="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri"
              >
                <SiKlarna />
                <p>Klarna</p>
              </button>
              </Link>
              <Link to={"/Del"} element={<Del/>}>
              <button
                aria-label="Login with Twitter"
                role="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri"
              >
                <FiCreditCard />
                <p>Card</p>
              </button>
              </Link>
               </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { Payment };
