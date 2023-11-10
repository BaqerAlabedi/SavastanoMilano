import { Navbar } from "./navbar";
import { Footer } from "./footer";
import image1 from "../Bilder/Image.jpeg";
import login from "../Bilder/login.jpg";
// import { useBasket } from './basketContext';

const Oneobject = () => {
  const addToBasket = async () => {
    try {
      const userId = localStorage.getItem("userID");
      const response = await fetch(`https://savastano-milano.vercel.app/putincart/${userId}/1`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to add to basket");
      }

      // Handle success, maybe update UI or show a success message
    } catch (error) {
      // Handle errors, show an error message or take appropriate action
      console.error("Error adding to basket:", error);
    }
  };
  return (
    <>
        <>
            <Navbar />

        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${login})` }}>
            
            <div className="flex justify-center items-center py-20">
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img
                alt=""
                className="object-cover w-full h-80 dark:bg-gray-500"
                style={{
                    backgroundImage: `url(${image1})`,
                    backgroundSize: "contain", 
                }}
                />{" "}
                <div className="flex flex-col justify-between p-1 space-y-1">
                <div className="space-y-1">
                    <h2 className="text-1xl font-semibold tracki"> Milano WHITE TEEE</h2>
                    <div className="dark:text-gray-100">
                    799kr
                  </div>
                    <p className="dark:text-gray-100">
                    Experience everyday comfort in our stylish sweatshirt, a
                    perfect blend of warmth and fashion. Elevate your casual
                    wardrobe with this cozy essential
                    </p>
                </div>
            
                <button
                    type="button"
                    onClick={addToBasket}
                    className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
                >
                    ADD TO BAG
                </button>
                </div>
            </div>
            </div>
         </div>   
      </>
      <Footer />
    </>
  );
}

export { Oneobject };
