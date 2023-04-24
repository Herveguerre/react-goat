import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="space-x-2 text-end text-white item-center mr-2 ">
      
      <Link to="/">Acceuil</Link>
      <Link to="/Mark">Mark</Link>
      <Link to="Elon">Elon</Link>
      <Link to="Jack">Jack</Link>
      
      <Link to="Bil">Bil</Link>
      <Link to="Contact">contact</Link>
    </div>
  );
}
