import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Email invalid"),
    password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
})

export type LoginFormData = z.infer<typeof loginSchema>

export const testimonySchema = z.object({
    content: z.string().min(5, "Le contenu doit contenir au moins 5 caractères")
    .max(500, "Le contenu doit contenir au plus 500 caractères"),
}).refine((data) => data.content.trim() !== "", {
    message: "Le contenu ne peut pas être vide", }
);

export type TestimonyFormData = z.infer<typeof testimonySchema>