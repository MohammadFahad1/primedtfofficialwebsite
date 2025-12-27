/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     new URL("https://lh3.googleusercontent.com/**"),
  //     new URL("https://maps.googleapis.com/**"),
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // Allows all images from your Cloudinary account
      },
    ],
  },
};

export default nextConfig;
