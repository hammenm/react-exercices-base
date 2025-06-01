import { createServer } from "node:http";
import packages from "./packages.json" with { type: "json" };

const responseError = { code: "NOT_FOUND", message: "Module not found" };

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  const param = req.url.slice(1); // Remove leading slash

  const response = packages?.[param] || responseError;
  res.end(JSON.stringify(response, null, 2));
});

const PORT = 3003;
// starts a simple http server locally
server.listen(PORT, "localhost", () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
