import { Navbar } from "./navbar";
import { Footer } from "./footer";
import login from "../Bilder/login.jpg";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      await Axios.post("https://savastano-milano.vercel.app/register", {
        email: email,
        password: password,
      });

      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${login})` }}
      >
        <div className="flex justify-center items-center m-2 p-12">
          <div className="flex flex-col max-w-md rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            <div className="mb-8 text-center">
              <h3 className="my-3 text-4xl font-bold">Register to</h3>
              <p className="text-sm dark:text-gray-400">Savastano Milano</p>
            </div>
            <form noValidate="" action="" className="space-y-12">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm">
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button
                    type="button"
                    onClick={submit}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { Register };
