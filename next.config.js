/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
	api: {
		bodyParser: {
			sizeLimit: '10mb',
		},
	},
}

module.exports = nextConfig
