import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const investigations = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/investigations' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    authors: z.array(z.string()),
    publication_date: z.coerce.date(),
    updated_date: z.coerce.date().optional(),
    cover_image: z.string(),
    reading_time: z.string().default('12 min read'),
    featured: z.boolean().default(false),
    type: z.enum(['investigation', 'technical']).default('investigation'),
    status: z.enum(['published', 'draft']).default('published'),
    case_id: z.string().optional(),
    threat_actor: z.string().optional(),
    target: z.string().optional(),
    impact: z.string().optional(),
    references: z.array(z.object({
      title: z.string(),
      url: z.string(),
      organization: z.string().optional(),
      date: z.string().optional()
    })).default([])
  })
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/authors' }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    avatar: z.string(),
    areas_of_expertise: z.array(z.string()),
    pgp_key_fingerprint: z.string().optional(),
    github: z.string().optional(),
    linkedin: z.string().optional(),
    twitter: z.string().optional()
  })
});

export const collections = { investigations, authors };
