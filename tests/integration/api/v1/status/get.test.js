test("GET to /api/v1/status", async () => {
  const response = await fetch(
    "https://clone-tabnews-liard-zeta.vercel.app/api/v1/status",
  );

  expect(response.status).toBe(200);
});
