import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function UserFooter() {
  return (
    <div>
      <div className="footer">
        <div className="footer-center container">
          <div className="footer-center-left">
            <img
              src="https://images.vexels.com/media/users/3/144837/isolated/preview/40f189daa5c0279718484ca5f5569f78-crypto-icon.png"
              alt=""
              className="w-20 h-20"
            />
          </div>
          <div className="footer-center-center">
            <p className="text-center">
              Connect your wallet to get 24h, daily, weekly and cumulative
              Profit & Loss analysis. Level up your crypto investing strategy.
            </p>
          </div>
          <div className="footer-center-right">
            <FacebookOutlinedIcon className="text-white" />
            <InstagramIcon className="text-white" />
            <YouTubeIcon className="text-white" />
            <LinkedInIcon className="text-white" />
          </div>
        </div>
        <footer className="footer-bottom ">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Account</h3>
            <ul>
              <li>
                <a href="#">My cart</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
              <li>
                <a href="#">Login/Register</a>
              </li>
            </ul>
          </div>

          <div className="footer-column newsletter">
            <h3>Newsletter</h3>
            <p>
              Subscribe to our newsletter to get more free tips. No Spam,
              Promise.
            </p>
            <form action="#">
              <input type="email" placeholder="Email" />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>

          <div className="footer-column">
            <h3>Get in touch</h3>
            <p>69 North Cleveland Street, Memphis, USA.</p>
            <p>(123) 8111 9210 - (012) 1111 6868</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
