"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { authToken, removeAuthToken } from '@/app/utils/auth';

const Navbar = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const checkAuth = () => {
    // Ensure this code runs only in the browser, next.js doesn't have access to the sessionStorage
    if (typeof window !== "undefined") {
      setAuthenticated(authToken() !== null);
    }
  }

  useEffect(() => {
    checkAuth();

    // Ensure this code runs only in the browser, next.js doesn't render the navbar before
    if (typeof window !== "undefined") {
      const navbarElement = document.querySelector(".navbar");
      navbarElement.addEventListener("login", checkAuth);
  
      return () => {
          navbarElement.removeEventListener("login", checkAuth);
      };
    }
  }, []);

  const handleLogout = () => {
    removeAuthToken();
    setAuthenticated(false);

    window.location = "/login";
  };

  return (
    <header className="navbar">
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>

          {!authenticated ? (
            <li>
              <Link href="/login">Login</Link>
            </li>
          ) : (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;