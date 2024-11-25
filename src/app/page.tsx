"use client";

import React from "react";
import Image from "next/image";

import styles from "@/styles/page.module.css";

export default function Page() {
  return (
    <>
      <Image
        src="/loading.gif"
        alt="Sailing ship on waters"
        width={191}
        height={180}
        priority
        unoptimized
        className={styles.loading}
      />
    </>
  );
}
