import { BlogData } from "../../Data/BlogData";

const baseURL = 'https://virtualexperts.net'

const entries = [
  {
    path: '/',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 1,
  },
  {
    path: '/order',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    path: '/letstalk',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    path: '/amazon-fba-consultant',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    path: '/services',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
  },
  {
    path: '/about',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/blog',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.5,
  },
]

BlogData.map((blog) => {
  entries.push({
    path: `/blog/${blog.id}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.5,
  })
})

/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */
export default async function handler(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/xml')
  // Instructing the Vercel edge to cache the file
  res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')
  // generate sitemap here
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
  ${entries.map((entry) => {
    return `
      <url>
        <loc>${baseURL + entry.path}</loc>
        <lastmod>${entry.lastmod}</lastmod>
        <changefreq>${entry.changefreq}</changefreq>
        <priority>${entry.priority}</priority>
      </url>
    `
  }).join('')}
  </urlset>`
  res.end(xml)
}