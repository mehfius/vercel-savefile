// Import the `req` object from the `@vercel/node` package.
const { req } = require("@vercel/node");

// Get the client's IP address.
const ipAddress = req.headers.get("X-Forwarded-For");

// Create a JSON object to store the IP address.
const ipAddressObject = {
  ipAddress: ipAddress,
};

// Save the JSON object to a file.
const fs = require("fs");
fs.writeFile("ip-addresses.json", JSON.stringify(ipAddressObject), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("IP address saved to file successfully.");
  }
});
