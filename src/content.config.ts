import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md", }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    aiGeneratedContent: z.boolean().optional(),
  }),
});

const project = defineCollection({
  loader: glob({ base: "./src/content/project", pattern: "**/*.md", }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    version: z.string(),
    description: z.string(),
    type: z.string(),
    tags: z.array(z.string()),
    stack: z.string().optional(),
    icon: z.string().optional(),
    github: z.string().optional(),
    website: z.string().optional(),
    aiGeneratedContent: z.boolean().optional(),
    aiGeneratedProject: z.boolean().optional(),
  }),
});

export const collections = {
  'blog': blog,
  'project': project,
};
