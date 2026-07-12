import axios from "axios";

const PROJECT_SECRET = import.meta.env.VITE_PROJECT_SECRET;

const api = axios.create({
  baseURL: `https://${PROJECT_SECRET}.mockapi.io/api/vb`,
});

export async function getLessons() {
  const response = await api.get("/lessons");
  return response.data;
}

export async function createLesson(data) {
  const response = await api.post("/lessons", data);
  return response.data;
}

export async function updateLesson(id, data) {
  const response = await api.put(`/lessons/${id}`, data);
  return response.data;
}

export async function deleteLesson(id) {
  await api.delete(`/lessons/${id}`);
}
