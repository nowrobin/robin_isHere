// schemas/ideaSchema.ts
import { z } from 'zod';

export const ContentDetailSchema = z.object({
  title: z.string(),
  highlight: z.string(),
  keywords: z.array(z.string()),
  summary: z.string(),
});

export const IdeaArraySchema = z.array(ContentDetailSchema);

// 타입 추출 (자동으로 TS 타입도 만들어줌)
export type Idea = z.infer<typeof ContentDetailSchema>;
