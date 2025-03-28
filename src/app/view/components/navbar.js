"use client";

import "/src/styles/Navbar.css";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { authToken, removeAuthToken } from '@/app/utils/auth';

const Navbar = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const checkAuth = () => {
    if (typeof window !== "undefined") {
      setAuthenticated(authToken() !== null);
    }
  };

  useEffect(() => {
    checkAuth();

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
      <a href="#main-content" className="skip-link">Direct naar inhoud</a>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          {!authenticated ? (
            <li>
              <Link href="/login">Login</Link>
            </li>
          ) : (
            <>
              <li>
                <ul>
                  <li>
                    <Link href="/profile">Mijn profiel</Link>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Uitloggen</button>
                  </li>
                </ul>
              </li>

            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;