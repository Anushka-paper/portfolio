import { create } from "zustand";
import api from "#api/client";

function readStoredToken() {
  try {
    return localStorage.getItem("admin_token");
  } catch {
    return null;
  }
}

const useAuthStore = create((set) => ({
  token: readStoredToken(),

  login: async (password) => {
    const { token } = await api.post("/api/login", { password });
    try {
      localStorage.setItem("admin_token", token);
    } catch {
      // ignore storage errors (e.g. private browsing)
    }
    set({ token });
  },

  logout: () => {
    try {
      localStorage.removeItem("admin_token");
    } catch {
      // ignore storage errors
    }
    set({ token: null });
  },
}));

export default useAuthStore;
