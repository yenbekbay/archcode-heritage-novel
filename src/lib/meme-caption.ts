import { z } from "zod";

export const MemeCaptionRequestSchema = z
  .object({
    templateId: z.string().regex(/^\d{1,30}$/u),
    captions: z.array(z.string().trim().min(1).max(500)).min(1).max(20),
  })
  .strict();

export const MemeCaptionResponseSchema = z.object({
  url: z
    .string()
    .url()
    .refine((value) => {
      const url = new URL(value);

      return (
        url.protocol === "https:" &&
        url.hostname === "i.imgflip.com" &&
        url.username === "" &&
        url.password === "" &&
        url.port === ""
      );
    }),
});
