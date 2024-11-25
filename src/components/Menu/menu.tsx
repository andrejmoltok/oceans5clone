"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import styles from "@/styles/menu.module.css";

export default function Menu() {
  const { user } = useUser();
  return (
    <>
      <div className={styles.navbar}>
        <ul className={styles.navlist}>
          <li className={styles.logo}>
            <Link href="/">
              <Image
                src="/ship.png"
                alt="Oceans5 logo with a medieval, wooden ship with pink sails"
                width={75}
                height={64}
              />
            </Link>
          </li>
          {/* // TODO */}
          <li className={styles.listitem}>Leaderboard</li>
          {/* // TODO */}
          <li className={styles.listitem}>Help & Support</li>
          {/* // TODO */}
          <li className={styles.listitem}>Contact</li>
          {!user ? (
            <>
              <li className={styles.listitem}>
                <Link href="/api/auth/login?returnTo=/verify">
                  Sign In/Sign Up
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className={styles.listitem}>
                <Link href="/lobby">Lobby</Link>
              </li>
              <li className={styles.listitem}>
                <Link href="/profile">Profile</Link>
              </li>
              <li className={styles.listitem}>
                <Link href="/clear">Sign Out</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className={styles.spacer}></div>
    </>
  );
}
