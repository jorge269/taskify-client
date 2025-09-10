import { http } from "../api/http.js";

export const taskService = {
  getAll: () => http.get("/tasks"),
  create: (task) => http.post("/tasks", task),
  update: (id, task) => http.put(`/tasks/${id}`, task),
  remove: (id) => http.del(`/tasks/${id}`)
};
