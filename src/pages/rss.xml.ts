import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const investigations = await getCollection('investigations');
  const published = investigations
    .filter((i) => i.data.status === 'published')
    .sort((a, b) => new Date(b.data.publication_date).getTime() - new Date(a.data.publication_date).getTime());

  const siteUrl = context.site ? context.site.toString().replace(/\/$/, '') : 'https://cyberexorcist.publication';

  return rss({
    title: 'CYBER EXORCIST — Case Files & Technical Investigations',
    description: 'Independent Cybercrime Research & Technical Investigation Publication. Exposing the Anatomy of Digital Crime.',
    site: siteUrl,
    items: published.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.publication_date),
      description: post.data.description,
      link: `/investigations/${post.id.replace(/\.(md|mdx)$/, '')}`,
      categories: [post.data.category, ...post.data.tags],
      author: post.data.authors.join(', ')
    })),
    customData: `<language>en-us</language>`
  });
}
