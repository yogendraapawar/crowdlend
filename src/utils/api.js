const API_URL = "http://localhost:3001/api";

const fetchData = async (endpoint, method = "GET", body = null) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    const response = await fetch(`${API_URL}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const get = async (endpoint) => {
  return fetchData(endpoint, "GET");
};

export const post = async (endpoint, body) => {
  return fetchData(endpoint, "POST", body);
};

export const put = async (endpoint, body) => {
  return fetchData(endpoint, "PUT", body);
};

export const deleteRequest = async (endpoint) => {
  return fetchData(endpoint, "DELETE");
};
