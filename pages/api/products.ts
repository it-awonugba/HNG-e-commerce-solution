import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const API_BASE_URL = process.env.API_BASE_URL;
    const ORG_ID = process.env.ORG_ID;
    const APP_ID = process.env.APP_ID;
    const API_KEY = process.env.API_KEY;

    if (!API_BASE_URL || !ORG_ID || !APP_ID || !API_KEY) {
      throw new Error("Missing environment variables");
    }

    const url = `${API_BASE_URL}/products?organization_id=${ORG_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
