import api from "@/lib/axios";
import type { ProjectFromData } from "@/types";
import { isAxiosError } from "axios";

export async function createProject(formData: ProjectFromData) {
  try {
    const { data } = await api.post("/projects", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
