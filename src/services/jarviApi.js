export async function submitApplication(data, apiKey) {
  const response = await fetch(
    "https://functions.prod.jarvi.tech/v1/public-api/rest/v2/applicants",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey
      },
      body: JSON.stringify(data)
    }
  );

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.message || "API error");
  }

  return response.json();
}