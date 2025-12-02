// import logo from "../assets/logo.png";
import { useState } from "react";
import logo1 from "../assets/Ayria_1.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between mt-5">
      <img src={logo1} alt="logo" className="h-12" />
      <div className="hidden sm:flex gap-8 font-spaceLight text-xl items-center">
        <p>About Us</p>
        <p>Services</p>
        <p>Use Cases</p>
        <p>Pricing</p>
        <p>Blog</p>
        <button className="border rounded-xl py-4 px-8 hover:bg-brand-dark hover:text-white">
          Request a quote
        </button>
      </div>
      {/* Hamburger (mobile only) */}
      <button onClick={() => setOpen(true)} className="sm:hidden text-3xl">
        ☰
      </button>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/70 z-50 flex flex-col items-center justify-center text-white text-2xl gap-6">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-4xl"
          >
            ✕
          </button>

          <p onClick={() => setOpen(false)}>About Us</p>
          <p onClick={() => setOpen(false)}>Services</p>
          <p onClick={() => setOpen(false)}>Use Cases</p>
          <p onClick={() => setOpen(false)}>Pricing</p>
          <p onClick={() => setOpen(false)}>Blog</p>
          <button
            onClick={() => setOpen(false)}
            className="border rounded-xl py-4 px-8 hover:bg-brand-dark hover:text-white"
          >
            Request a quote
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
