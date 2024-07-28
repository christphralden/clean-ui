import z from "zod";

const BaseContentSchema = z.object({
  title: z.string(),
  description: z.string(),
  body: z.string(),
});

export const SidebarSchema = BaseContentSchema;
