import "../Styles/hero.css";
import heroImage from "../Bilder/heroImage.jpg"; 
import { Link } from "react-router-dom";
import { Newdrop } from "./newdrop";

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${heroImage})`, 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="dropdown-menu">
      <section className="hero" style={heroStyle}>
        <div className="hero-content">
          <div className="border">
          <Link to={"/Newdrop"} element={<Newdrop />}>
            <button className="hero-title">New Drop</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Hero };
