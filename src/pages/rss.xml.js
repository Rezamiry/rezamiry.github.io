import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/profile';

export async function GET(context) {
  const posts = (await getCollection('blog'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: `${site.name} · Blog`,
    description: 'Notes on agentic AI, RAG, LLMOps and ML in production.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/blog/${p.id}/`,
    })),
  });
}
