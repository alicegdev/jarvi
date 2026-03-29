export async function submitApplication({
  firstName,
  lastName,
  emailAddresses,
  linkedInUrl,
  referenceId
}) {
  const { response, error } = await fetch(
    `https://functions.prod.jarvi.tech/v1/public-api/rest/v2/applicants`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-API-KEY": "secret"},
      body: JSON.stringify({ firstName, lastName, emailAddresses, linkedInUrl, referenceId }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || response.statusText);
  }

  console.log(error);
  return response.json();
}