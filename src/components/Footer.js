import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from "@material-ui/core/Link";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <Link
        href="https://api.whatsapp.com/send?phone=5554991853106;"
        style={{ color: "#fff" }}
      >
        {"Copyright © "} Msantos {new Date().getFullYear()} {"."}
      </Link>{" "}
    </div>
  );
}

export default Footer;
