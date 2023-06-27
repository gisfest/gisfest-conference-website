import { MetadataRoute } from 'next';
const baseURL = process.env.NEXT_PUBLIC_FRONTEND_URL;
export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${baseURL}`,
			lastModified: new Date(),
		},
		{
			url: `${baseURL}/cfs`,
			lastModified: new Date(),
		},
		{
			url: `${baseURL}/team`,
			lastModified: new Date(),
		},
		{
			url: `${baseURL}/agenda`,
			lastModified: new Date(),
		},
	];
}
