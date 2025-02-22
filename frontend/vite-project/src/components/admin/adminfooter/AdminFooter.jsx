import React from "react";

export default function AdminFooter() {
  return (
    <div>
      <div className="admin-footer">
        <footer className="admin-footer-bottom">
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
