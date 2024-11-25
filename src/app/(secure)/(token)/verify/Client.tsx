"use client";

import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/navigation";
import useManagementAPITokenStore from "@/lib/zustand/ManagementAPITokenStore";
import useAuthenticationAPITokenStore from "@/lib/zustand/AuthenticationAPITokenStore";

function Client({ Mtoken, AToken }: { Mtoken: string; AToken: string }) {
  const MtokenStore = useManagementAPITokenStore();
  const AtokenStore = useAuthenticationAPITokenStore();
  AtokenStore.setToken(AToken);
  MtokenStore.setToken(Mtoken);

  const handleRedirect = () => {
    if (MtokenStore.getToken() !== "" && AtokenStore.getToken() !== "") {
      redirect("/lobby");
    } else {
      // TODO add Pino logger
      return <>Error while calling Management and Authentication API</>;
    }
  };

  React.useEffect(() => {
    handleRedirect();
  }, []);
  return <>Redirecting...</>;
}

export default withPageAuthRequired(Client, {
  onRedirecting: () => <div>Loading...</div>,
  onError: (error) => (
    <div>Error loading Verification page: {error.message}</div>
  ),
  returnTo: "/verify",
});
