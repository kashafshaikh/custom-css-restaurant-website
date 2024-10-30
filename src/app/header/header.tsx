"use client";
import Link from "next/link";
import { PiHamburgerBold } from "react-icons/pi";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <button title="Menu" onClick={onClickHandler} className="menu-button">
        {isOpen ? (
          <FaTimes size={25} className="icon" />
        ) : (
          <FaBars size={25} className="icon" />
        )}
      </button>

      <div className="brand">
        <h2 className="brand-name">
          Mrburger
          <span className="hamburger-icon">
            <PiHamburgerBold />
          </span>
        </h2>
      </div>

      <nav className="nav-links">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/about" className="nav-link">
          About
        </Link>
        <Link href="/menu" className="nav-link">
          Menu
        </Link>
        <Link href="/contact" className="nav-link">
          Contact
        </Link>
      </nav>

      {isOpen && (
        <nav className="mobile-menu">
          <ul className="mobile-menu-list">
            <li>
              <Link href="/" className="mobile-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="mobile-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/menu" className="mobile-link">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/contact" className="mobile-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
