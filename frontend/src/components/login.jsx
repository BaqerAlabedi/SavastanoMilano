import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import login from "../Bilder/login.jpg";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await Axios.post("https://savastano-milano-gtrr.vercel.app/login", {
        email,
        password,

      });

      if (response.status === 200) {
        localStorage.setItem("Email", email);
        localStorage.setItem("login", true);
        const userID = response.data.userId;
        localStorage.setItem("userID", userID);
        console.log("Inloggning lyckades!");
        navigate("/welcome");
      } else {
        console.log("Inloggning misslyckades");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${login})` }}
      >
        <div className="flex justify-center items-center py-48">
          <div className="relative flex flex-col max-w-md rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            <div className="mb-8 text-center">
              <h4 className="my-3 text-4xl font-bold">Log in to</h4>
              <h1 className="text-sm dark:text-gray-400">Savastano Milano</h1>
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
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-xs hover:underline dark:text-gray-400"
                    >
                      Forgot password?
                    </a>
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
                    className="w-full px-8 py-3 font-semibold rounded-md dark:bg-blue-950 dark:text-white"
                  >
                    Sign in
                  </button>
                </div>
                <p className="px-6 text-sm text-center dark:text-gray-400">
                  Dont have an account yet?
                  <Link to="/Register">Sign up</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { Login };
