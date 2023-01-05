import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export async function GET(url: string) {
  try {
    const response = await httpClient.get(url);
    return response.data.data;
  } catch (error) {
    return {
      error,
    };
  }
}

export async function POST(url: string, params: {}) {
  try {
    const response = await httpClient.post(url, params);
    return response.data;
  } catch (error) {
    return {
      error,
    };
  }
}
