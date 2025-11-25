import { z } from "zod";

/**Tasks */
export const taskStatusSchema = z.enum(["pending" , "on_hold" , "in_progress" , "under_review" , "completed"])

export const taskSchema = z.object({
  _id: z.string(),
  name: z.string(),
  descripcion: z.string(),
  project: z.string(),
  status: taskStatusSchema
});

export type Task = z.infer<typeof taskSchema>
export type TaskFormData = Pick<Task, 'name' | 'descripcion'>

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
