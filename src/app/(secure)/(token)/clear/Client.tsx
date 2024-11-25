"use client";

import React from "react";
import { redirect } from "next/navigation";
import useAuthenticationAPITokenStore from "@/lib/zustand/AuthenticationAPITokenStore";
import useManagementAPITokenStore from "@/lib/zustand/ManagementAPITokenStore";

export default function Page() {
  const clearAuthTokenStore = useAuthenticationAPITokenStore();
  const clearMtokenStore = useManagementAPITokenStore();
  clearAuthTokenStore.clearToken();
  clearMtokenStore.clearToken();
  return <>{redirect("/api/auth/logout")}</>;
}
