import { create } from "zustand";

const useThemeStore = create((set, get) => ({
  theme: "light",

  toggleTheme: () => {
    const next = get().theme === "light" ? "dark" : "light";
    try {
      localStorage.setItem("theme", next);
    } catch {
      // ignore storage errors (e.g. private browsing)
    }
    document.documentElement.classList.toggle("dark", next === "dark");
    set({ theme: next });
  },

  initTheme: () => {
    let saved = "light";
    try {
      saved = localStorage.getItem("theme") || "light";
    } catch {
      // ignore storage errors
    }
    document.documentElement.classList.toggle("dark", saved === "dark");
    set({ theme: saved });
  },
}));

export default useThemeStore;
