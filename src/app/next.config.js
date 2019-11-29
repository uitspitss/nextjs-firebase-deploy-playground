if (process.env.NOW) {
  module.exports = {
    distDir: "../../.next",
    target: "serverless"
  };
} else {
  module.exports = {
    distDir: "../../dist/functions/next"
  };
}
