import React, { useEffect, useRef, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./navigation.module.css";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const navMenuRef = useRef(null);
  const navButtonRef = useRef(null);

  const categories = [
    { label: "Action", to: "/action-games" },
    { label: "Adventure", to: "/adventure-games" },
    { label: "R.P.G", to: "/rpg-games" },
    { label: "Strategy", to: "/strategy-games" },
    { label: "Sports", to: "/sports-games" }
  ]

  useEffect(() => {
    const onMenuClick = (e) => {
      if (!navMenuRef.current || !navButtonRef.current) {
        return;
      }
      if (!navMenuRef.current.contains(e.target) && !navButtonRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onMenuClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMenuClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (open && navMenuRef.current) {
      const firstLink = navMenuRef.current.querySelector("a");
      if (firstLink) {
        firstLink.focus();
      }
    }
  }, [open])

  return (
    <Layout title="Navigation">
      <nav className={styles.navbar} aria-label="Site navigation">
        <div className={styles.navInner}>
          <div>
            <Link className={styles.brandLink} to="">All Things Video Games</Link>
          </div>
          <ul className={styles.navList}>
            <li><Link className={styles.navLink} to="">Home</Link></li>
            <li className={styles.dropdownContainer}>
            <button className={styles.navMenuButton} id="video-games-button" onClick={() => setOpen((v) => !v)} onKeyDown={(e) => {
                  if (e.key === "ArrowDown") setOpen(true);
                  }} ref={navButtonRef} type="button" aria-haspopup="true" aria-expanded={open} aria-controls="video-games-menu">Video Games<span className={styles.caret} aria-hidden="true">▾</span></button>
                <ul
                id="video-games-menu"
                ref={navMenuRef}
                className={styles.dropdown}
                role="menu"
                aria-labelledby="video-games-button"
                hidden={!open}>
                {categories.map((c) => (
                  <li key={c.label} role="none">
                    <Link role="menuitem" className={styles.dropdownLink} to={c.to}>
                      {c.label}</Link></li>))}
                      </ul>
                      </li>
            <li><Link className={styles.navLink} to="">Reviews</Link></li>
            <li><Link className={styles.navLink} to="">About Us</Link></li>
            <li><Link className={styles.navLink} to="">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    </Layout>
  );
}