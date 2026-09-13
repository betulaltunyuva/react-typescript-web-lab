import type { Project } from "../types/project";

const API_URL = "/data/projects.json";

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(
        `Projects could not be loaded: ${response.status}`
      );
    }

    const data: Project[] = await response.json();
    return data;
  } catch (error) {
    console.error("Project data request failed:", error);
    throw error;
  }
}
