import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { FiTruck } from "react-icons/fi";
import hood2 from "../Bilder/hood2.jpg";

function Del() {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center h-screen "
        style={{ backgroundImage: `url(${hood2})` }}
      >
        <div className="flex justify-center items-center">
          <section className="py-48 dark:text-gray-900">
            <div className="container px-4 mx-center">
              <div className="flex flex-wrap items-stretch -mx-4">
                <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                  <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-violet-400 dark:text-gray-900">
                    <div className="space-y-2">
                      <h6 className="text-3xl font-bold">
                        Thanks for your order!
                      </h6>
                    </div>
                    <p className="leadi">
                      Your order have been placed and will be Delivered soon
                    </p>
                    <FiTruck className=" w-80 h-40" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { Del };
