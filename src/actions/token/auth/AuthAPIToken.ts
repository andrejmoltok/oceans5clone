"use server";

import { getAccessToken } from "@auth0/nextjs-auth0";

export default async function AuthAPIToken() {
  try {
    const { accessToken } = await getAccessToken();
    return accessToken as string;
  } catch (error) {
    console.log(error);
  }
}
