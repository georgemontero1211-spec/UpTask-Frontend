import { z } from "zod";

/** Auth & Users */

const authSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
  password_confirmation: z.string()
})

type Auth = z.infer<typeof authSchema>
export type UserLoginForm = Pick<Auth, 'email' | 'password'>
export type UserRegistrationForm  = Pick<Auth,"name" | 'email' | 'password' | 'password_confirmation'>



/**Tasks */
export const taskStatusSchema = z.enum([
  "pending",
  "onHold",
  "inProgress",
  "underReview",
  "completed",
]);
export type TaskStatus = z.infer<typeof taskStatusSchema>

export const taskSchema = z.object({
  _id: z.string(),
  name: z.string(),
  descripcion: z.string(),
  project: z.string(),
  status: taskStatusSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
export type TaskFormData = Pick<Task, "name" | "descripcion">;

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
