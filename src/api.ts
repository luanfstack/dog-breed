export async function registerUser(email: string) {
  const response = await fetch("https://dogbreed-api.q9.com.br/register", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  const data = await response.json();
  sessionStorage.setItem("token", data.user.token);
  return true;
}
