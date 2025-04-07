"use client";

import { useAuth0 } from "@auth0/auth0-react";
import styles from "@/styles/menu.module.css";

export default function Menu() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <>
      <div className={styles.navbar}>
        <ul className={styles.navlist}>
          <li className={styles.logo}>
            <a href="/">
              <img
                src="/ship.png"
                alt="Oceans5 logo with a medieval, wooden ship with pink sails"
                width={75}
                height={64}
              />
            </a>
          </li>
          {/* // TODO */}
          <li className={styles.listitem}>Leaderboard</li>
          {/* // TODO */}
          <li className={styles.listitem}>Help & Support</li>
          {/* // TODO */}
          <li className={styles.listitem}>Contact</li>
          {!isAuthenticated ? (
            <>
              <li className={styles.listitem}>
                <a href="#" onClick={() => loginWithRedirect()}>Sign In/Sign Up</a>
              </li>
            </>
          ) : (
            <>
              <li className={styles.listitem}>
                <a href="/lobby">Lobby</a>
              </li>
              <li className={styles.listitem}>
                <a href="/profile">Profile</a>
              </li>
              <li className={styles.listitem}>
                <a href="#" onClick={() => logout()}>Sign Out</a>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className={styles.spacer}></div>
    </>
  );
}
