import { z } from "zod";

/**Projects  */
export const projectSchema = z.object({
  _id: z.string(),
  projectName: z.string(),
  clientName: z.string(),
  descripcion: z.string(),
});

export const dashboardProjectSchema = z.array(
  projectSchema.pick({
    _id: true,
    projectName: true,
    clientName: true,
    descripcion: true,
  })
);

export type Project = z.infer<typeof projectSchema>;
export type ProjectFromData = Pick<
  Project,
  "projectName" | "clientName" | "descripcion"
>;
