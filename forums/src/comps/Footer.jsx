import React from 'react';
import { FaInstagram, FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 mb-0 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="text-muted">© 2024 Company, Tech Forum by AAAG</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/ayush_2_3_?igshid=ewywenm1x82hn"><FaInstagram /></a></li>
          <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/profile.php?id=100006833599484&mibextid=LQQJ4d"><FaFacebook/></a></li>
          <li className="ms-3"><Link className="text-muted" to="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaTwitterSquare/></Link></li>
        </ul>
      </footer>
    </div>
  );
}
