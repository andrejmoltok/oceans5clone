"use client";

import dynamic from "next/dynamic";
import React from "react";

const DynamicClient = dynamic(() => import("./Client"), { ssr: false });

export default function Page() {
  return (
    <>
      <DynamicClient />
    </>
  );
}
