"use client";

import dynamic from "next/dynamic";

const DynamicClient = dynamic(() => import("./Client"), { ssr: false });

export default function Page() {
  return (
    <>
      <DynamicClient />
    </>
  );
}
