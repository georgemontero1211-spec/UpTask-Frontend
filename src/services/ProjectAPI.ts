import api from "@/lib/axios";
import {
  dashboardProjectSchema,
  type Project,
  type ProjectFromData,
} from "@/types";
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

export async function getProject() {
  try {
    const { data } = await api("/projects");
    const response = dashboardProjectSchema.safeParse(data);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getProjectById(projectId: Project["_id"]) {
  try {
    const { data } = await api(`/projects/${projectId}`);
    return data;
    // const response = dashboardProjectSchema.safeParse(data);
    // if (response.success) {
    //   return response.data[0];
    // }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

type ProjectUpdateData = {
  formData: ProjectFromData;
  projectId: Project["_id"];
};

export async function updateProject({
  formData,
  projectId,
}: ProjectUpdateData) {
  try {
    const { data } = await api.put<string>(`/projects/${projectId}`, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function deleteProject(projectId: Project["_id"]) {
  try {
    const { data } = await api.delete<string>(`/projects/${projectId}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
