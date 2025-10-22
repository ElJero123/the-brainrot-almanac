import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const brainrots = defineCollection({
    schema: z.object({
        name: z.string(),
        lyrics: z.object({
            spanish: z.string(),
            english: z.string(),
            italian: z.string(),
        }).optional(),
        personality: z.object({
            spanish: z.string(),
            english: z.string(),
        }).optional(),
        history: z.object({
            spanish: z.string(),
            english: z.string(),
        }).optional(),
        reception: z.object({
            spanish: z.string(),
            english: z.string(),
        }).optional(),
        inBattle: z.object({
            spanish: z.string(),
            english: z.string(),
        }).optional(),
        image: z.string(),
        video: z.string(),
        key: z.string()
    })
})

export const collections = { brainrots }