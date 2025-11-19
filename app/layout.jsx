"use client";
import { useState } from "react";
import "./globals.css";

export const metadata = {
  title: "Thomas Nilsen – Moveoklinikken i Bodø",
  description: "Fysioterapi, osteopati og kognitiv terapi.",
};

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="no">
      <body>

        {/* HEADER */}
        <header className="header">
          <div className="header-inner">

            {/* Logo + navn */}
            <div className="header-left">
              <img src="/moveo-logo.png" alt="Moveoklinikken" className="header-logo" />
              <span className="header-name">Thomas Nilsen</span>
            </div>

            {/* Burger icon – mobil */}
            <div
              className="burger"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="burger-line"></div>
              <div className="burger-line"></div>
              <div className="burger-line"></div>
            </div>

            {/* DESKTOP MENU */}
            <nav className="nav desktop-nav">
              <a href="/">Hjem</a>
              <a href="/om-meg">Om meg</a>
              <a href="/kontakt">Kontakt</a>
              <a className="header-button" href="mailto:thomas@moveoklinikken.no">
                Bestill time
              </a>
            </nav>
          </div>

          {/* MOBILE MENU (only visible when open) */}
          {menuOpen && (
            <nav className="mobile-nav">
              <a href="/">Hjem</a>
              <a href="/om-meg">Om meg</a>
              <a href="/kontakt">Kontakt</a>
              <a className="mobile-button" href="mailto:thomas@moveoklinikken.no">
                Bestill time
              </a>
            </nav>
          )}
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
