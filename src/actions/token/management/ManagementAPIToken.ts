"use server";

import axios from "axios";

export default async function ManagementAPIToken() {
  try {
    const response = await axios({
      method: "POST",
      url: `${
        process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL as string
      }oauth/token`,
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.AUTH0_CLIENT_ID as string,
        client_secret: process.env.AUTH0_CLIENT_SECRET as string,
        audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE as string,
      }),
    });

    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching token:", error);
    throw error;
  }
}
