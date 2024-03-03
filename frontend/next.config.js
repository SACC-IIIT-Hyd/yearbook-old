/** @type {import('next').NextConfig} */
const nextConfig = {
    // rewrites: async () => {
    //     return [
    //         {
    //             source: '/api/:path*',
    //             destination: 'http://127.0.0.1:80/:path*'
    //         },
    //     ]
    // },

    // headers() {
    //     return [
    //         {
    //             // matching all API routes
    //             source: "/api/login",
    //             headers: [
    //                 { key: "Access-Control-Allow-Credentials", value: "true" },
    //                 { key: "Access-Control-Allow-Origin", value: "*" }, // replace this with your actual origin
    //                 { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
    //                 { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
    //             ]
    //         }
    //     ]
    // }

}

module.exports = nextConfig




// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
//     modularizeImports: {
//       "@mui/icons-material": {
//         transform: "@mui/icons-material/{{member}}",
//       },
//     },
//     images: {
//       remotePatterns: [
//         {
//           protocol: "https",
//           hostname: "picsum.photos",
//         },
//         {
//           protocol: "https",
//           hostname: "clubs.iiit.ac.in",
//         },
//         {
//           protocol: "http",
//           hostname: "localhost",
//         },
//         {
//           protocol: "http",
//           hostname: "files",
//         },
//         {
//           protocol: "http",
//           hostname: "nginx",
//         },
//         {
//           protocol: "http",
//           hostname: "dev.clubs.iiit.ac.in",
//         },
//       ],
//     },
//   };
  
//   const withMDX = require("@next/mdx")();
//   module.exports = withMDX(nextConfig);