module.exports = {
  distDir: process.env.NOW ? "../../.next" : "../../dist/functions/next",
  target: process.env.NOW ? "serverless" : ""
};
