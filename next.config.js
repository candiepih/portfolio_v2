/** @type {import('next').NextConfig} */
const path = require('path');
// const withTM = require("next-transpile-modules")(["gsap"]);

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

// module.exports = withTM(nextConfig);
module.exports = nextConfig;
