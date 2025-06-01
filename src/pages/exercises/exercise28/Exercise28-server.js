import { createServer } from "node:http";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const response = {
    latitude: 49.14,
    longitude: 6.1599994,
    generationtime_ms: 0.013470649719238281,
    utc_offset_seconds: 7200,
    timezone: "Europe/Berlin",
    timezone_abbreviation: "GMT+2",
    elevation: 167.0,
    hourly_units: { time: "iso8601", temperature_2m: "°C" },
    hourly: {
      time: [
        "2025-05-27T00:00",
        "2025-05-27T01:00",
        "2025-05-27T02:00",
        "2025-05-27T03:00",
        "2025-05-27T04:00",
        "2025-05-27T05:00",
        "2025-05-27T06:00",
        "2025-05-27T07:00",
        "2025-05-27T08:00",
        "2025-05-27T09:00",
        "2025-05-27T10:00",
        "2025-05-27T11:00",
        "2025-05-27T12:00",
        "2025-05-27T13:00",
        "2025-05-27T14:00",
        "2025-05-27T15:00",
        "2025-05-27T16:00",
        "2025-05-27T17:00",
        "2025-05-27T18:00",
        "2025-05-27T19:00",
        "2025-05-27T20:00",
        "2025-05-27T21:00",
        "2025-05-27T22:00",
        "2025-05-27T23:00",
      ],
      temperature_2m: [
        13.2, 12.5, 12.9, 12.5, 12.0, 11.7, 12.0, 12.5, 13.4, 14.5, 16.4, 17.5,
        18.2, 17.8, 18.5, 18.7, 18.8, 18.0, 17.1, 16.5, 15.9, 15.4, 15.1, 15.1,
      ],
    },
  };
  res.end(JSON.stringify(response, null, 2));
});

const PORT = 3001;
// starts a simple http server locally
server.listen(PORT, "localhost", () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
