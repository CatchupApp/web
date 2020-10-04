require("dotenv").config();
// next.config.js

module.exports = {
  // Expose environment variables to client
  env: {
    SERVER_BASE_URL: process.env.SERVER_BASE_URL,
  },
};
