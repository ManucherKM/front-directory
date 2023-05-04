import axios from "../axios";
import { create } from "zustand";

const useStore = create((set) => ({
  auth: true,
  login: async (login, password) => {
    if (!login || !password) {
      return;
    }

    const params = {
      email: login,
      password,
    };

    const { data } = await axios.post("/admin/auth", params);

    if (!data) {
      return;
    }

    set({ auth: true });

    return data;
  },
  logout: () => {
    set({ auth: false });
  },
  getDivisions: async () => {
    return [];
  },
  getManagements: async () => {
    return [];
  },
  createEmployee: async (
    email,
    fullName,
    number,
    role,
    subdivision,
    department,
    photo
  ) => {
    const formData = new FormData();

    formData.append("photo", photo);
    formData.append("email", email);
    formData.append("fullName", fullName);
    formData.append("number", number);
    formData.append("role", role);
    formData.append("subdivision", subdivision);
    formData.append("department", department);

    const { data } = await axios.post("/employee", formData);

    if (!data) {
      return;
    }

    return data;
  },
  updateEmployee: async (
    id,
    email,
    fullName,
    number,
    role,
    subdivision,
    department,
    photo
  ) => {
    const formData = new FormData();

    formData.append("photo", photo);
    formData.append("id", id);
    formData.append("email", email);
    formData.append("fullName", fullName);
    formData.append("number", number);
    formData.append("role", role);
    formData.append("subdivision", subdivision);
    formData.append("department", department);

    const { data } = await axios.post("/employee", formData);

    if (!data) {
      return;
    }

    return data;
  },
}));

export { useStore };
