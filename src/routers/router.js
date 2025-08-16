import { createRouter, createWebHistory } from "vue-router";
import routes from "@/routers/routes.js"; // make sure @ maps to /src in Vite config

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
