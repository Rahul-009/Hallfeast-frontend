import create from "zustand";
import * as SecureStore from "expo-secure-store";

const useAuthStore = create((set) => ({
  user: null,
  // user_id : null,
  university_id: null,

  user_id: "92af29a2-1804-410d-b92b-43524c2e7465",
  setUser: (user) => set({ user }),
  logout: () => set({ user: null, university_id: null }),

  authToken: null,
  setAuthToken: async (token) => {
    await SecureStore.setItemAsync("authToken", token);
    set({ authToken: token });
  },
  loadAuthToken: async () => {
    const token = await SecureStore.getItemAsync("authToken");
    set({ authToken: token });
  },
  clearAuthToken: async () => {
    await SecureStore.deleteItemAsync("authToken");
    set({ authToken: null });
  },
}));

export default useAuthStore;
