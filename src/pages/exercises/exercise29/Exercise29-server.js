import { createServer } from "node:http";
import { faker } from "@faker-js/faker";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  const sex = faker.person.sex();
  const name = {
    title: sex === "male" ? "Monsieur" : "Madame",
    first: faker.person.firstName(sex),
    last: faker.person.lastName(sex),
  };
  const portrait = faker.image.personPortrait({ sex });
  const picture = {
    large: portrait,
    medium: portrait,
    thumbnail: portrait,
  };

  const response = {
    results: [
      {
        gender: sex,
        name,
        email: `${name.first.toLowerCase()}.${name.last.toLowerCase()}@example.com`,
        picture,
      },
    ],
  };
  res.end(JSON.stringify(response, null, 2));
});

const PORT = 3002;
// starts a simple http server locally
server.listen(PORT, "localhost", () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
