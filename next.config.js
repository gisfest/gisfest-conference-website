/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
	reactStrictMode: true,
	experimental: {
		appDir: true,
		mdxRs: true,
	},
};

//ref-https://nextjs.org/docs/app/building-your-application/configuring/mdx
const withMDX = require('@next/mdx')({
	options: {
    providerImportSource: '@mdx-js/react',
  },});
module.exports = withMDX(nextConfig);
