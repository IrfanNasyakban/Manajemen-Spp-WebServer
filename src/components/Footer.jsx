import React from "react";
import {
  BiLogoTwitter,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoGooglePlus,
  BiLogoLinkedin,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="footer-top">
          <div class="container d-md-flex py-4">
            <div class="me-md-auto text-center text-md-start">
              <div class="copyright">
                &copy; Copyright{" "}
                <strong>
                  <span>SMA 1 WATES</span>
                </strong>
                . All Rights Reserved
              </div>
              <div class="credits">
                Designed by{" "}
                <a href="https://bootstrapmade.com/">Irvan Nasyakban</a>
              </div>
            </div>
            <div class="social-links text-center text-md-right pt-3 pt-md-0">
              <a href="#" class="twitter">
                <BiLogoTwitter className="icon-footer" />
              </a>
              <a href="#" class="facebook">
                <BiLogoFacebook className="icon-footer" />
              </a>
              <a href="#" class="instagram">
                <BiLogoInstagram className="icon-footer" />
              </a>
              <a href="#" class="google-plus">
                <BiLogoGooglePlus className="icon-footer" />
              </a>
              <a href="#" class="linkedin">
                <BiLogoLinkedin className="icon-footer" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
