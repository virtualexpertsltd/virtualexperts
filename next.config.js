/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				hostname: "images.insplash.com",
			},
			{
				hostname: "www.linkpicture.com",
			},
			{
				hostname: "res.cloudinary.com",
			},
			{
				hostname: "**.virtualexperts.net",
			},
			{
				hostname: "amzonestep.com",
			},
			{
				hostname: "media.istockphoto.com",
			},
			{
				hostname: "i.pinimg.com",
			},
			{
				hostname: "i.ibb.co",
			},
		],
	},
	rewrites: async () => [
		{
			source: "/sitemap.xml",
			destination: "/api/sitemap",
		},
	],
};

module.exports = nextConfig;
