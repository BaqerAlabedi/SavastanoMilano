import "../Styles/footer.css";
import { FaSnapchat } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>press</p>
            </a>

            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb__footer-links__div">
            <h4>Stay tuned! Launching soon on</h4>
            <div className="socialmedia">
              <a>
                <FaSnapchat />
              </a>
              <a>
                <FaInstagram />
              </a>
              <a>
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              ©{new Date().getFullYear()} Savastano Milano. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
