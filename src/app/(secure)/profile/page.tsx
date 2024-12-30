"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

// TODO
export default function Page() {
  const { user } = useUser();
  return (
    <>
      <section>
        <p>
          name: <span>{user?.name}</span>
        </p>
        <p>
          email: <span>{user?.email}</span>
        </p>
      </section>
    </>
  );
}
