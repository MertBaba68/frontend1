"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { authToken } from '@/app/utils/auth';

const Navbar = () => {
  const [authenticated, setAuthenticated] = useState(authToken() != "");

  useEffect(() => {
    setAuth(authToken());
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setAuthenticated(false); 
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

          {/* Conditional rendering for login/logout button */}
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
