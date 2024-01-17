/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	images: {
		domains: [
			"images.unsplash.com",
			"www.linkpicture.com",
			"lh3.googleusercontent.com",
			"media.istockphoto.com",
			"i.pinimg.com",
			"www.amzonestep.com",
			"res.cloudinary.com",
			"i.ibb.co",
			"www.virtualexperts.net",
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
