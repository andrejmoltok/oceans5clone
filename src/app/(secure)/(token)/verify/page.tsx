import React from "react";
import Client from "./Client";
import ManagementAPIToken from "@/actions/token/management/ManagementAPIToken";
import AuthAPIToken from "@/actions/token/auth/AuthAPIToken";

export default async function Page() {
  // Management API Token
  const accessToken = await ManagementAPIToken();
  // Authentication API Token
  const authAPIToken = await AuthAPIToken();

  return (
    <>
      <Client Mtoken={accessToken as string} AToken={authAPIToken as string} />
    </>
  );
}
