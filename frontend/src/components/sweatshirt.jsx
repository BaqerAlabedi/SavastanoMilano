import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Oneobject } from "./oneObject";
import { Link } from "react-router-dom";
import Bilder from "../Bilder/tshirt.jpg";
import h1 from "../Bilder/H1.jpg";
import h2 from "../Bilder/H2.jpg";
import h3 from "../Bilder/H3.jpg";


function Sweatshirt() {
  return (
    <>
      <>
        <Navbar />
        <section className="py-6 sm:py-12 dark:bg-white dark:text-gray-400">
          <div className="container p-12 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">SAVASTANO SWEATSHIRT</h2>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              <article className="flex flex-col dark:bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <Link to={"/Oneobject"} element={<Oneobject />}>
                    <img
                      alt=""
                      className="object-cover w-full h-80 dark:bg-gray-500"
                      style={{
                        backgroundImage: `url(${Bilder})`,
                        backgroundSize: "contain", 
                      }}
                    />
                  </Link>
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <div className="dark:text-gray-100">799kr</div>
                  <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                    Experience everyday comfort in our stylish sweatshirt, a
                    perfect blend of warmth and fashion. Elevate your casual
                    wardrobe with this cozy essential
                  </h3>
                </div>
              </article>
              <article className="flex flex-col dark:bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <Link to={"/Oneobject"} element={<Oneobject />}>
                    <img
                      alt=""
                      className="object-cover w-full h-80 dark:bg-gray-500"
                      style={{
                        backgroundImage: `url(${h1})`,
                        backgroundSize: "contain",
                      }}
                    />
                  </Link>
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <div className="dark:text-gray-100">799kr</div>
                  <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                    Experience everyday comfort in our stylish sweatshirt, a
                    perfect blend of warmth and fashion. Elevate your casual
                    wardrobe with this cozy essential
                  </h3>
                </div>
              </article>
              <article className="flex flex-col dark:bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <Link to={"/Oneobject"} element={<Oneobject />}>
                    <img
                      alt=""
                      className="object-cover w-full h-80 dark:bg-gray-500"
                      style={{
                        backgroundImage: `url(${h2})`,
                        backgroundSize: "contain", 
                      }}
                    />
                  </Link>
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <div className="dark:text-gray-100">799kr</div>
                  <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                    Experience everyday comfort in our stylish sweatshirt, a
                    perfect blend of warmth and fashion. Elevate your casual
                    wardrobe with this cozy essential
                  </h3>
                </div>
              </article>
              <article className="flex flex-col dark:bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <Link to={"/Oneobject"} element={<Oneobject />}>
                    <img
                      alt=""
                      className="object-cover w-full h-80 dark:bg-gray-500"
                      style={{
                        backgroundImage: `url(${h3})`,
                        backgroundSize: "contain",
                      }}
                    />
                  </Link>
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <div className="dark:text-gray-100">799kr</div>
                  <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                    Experience everyday comfort in our stylish sweatshirt, a
                    perfect blend of warmth and fashion. Elevate your casual
                    wardrobe with this cozy essential
                  </h3>
                </div>
              </article>
              
            </div>
          </div>
        </section>
      </>
      <Footer />
    </>
  );
}

export { Sweatshirt };
