import { useAuthStore } from "~~/store/authStore";

export const useAuth = () => {
  const router = useRouter();
  const authStore = useAuthStore();
  console.log("auth", authStore.$state.authenticated);
  if (!authStore.$state.authenticated) {
    return router.push("/login");
  }
};
