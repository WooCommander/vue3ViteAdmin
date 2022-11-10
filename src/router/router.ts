import {
  createWebHistory,
  createRouter
} from "vue-router";
import LoginForm from "../components/LoginForm.vue";
import Layout from "../components/Layout.vue";
import ServiceSection from "../components/service-section.vue";
const history = createWebHistory();
const routes = [
  {
    path: "",
    component: Layout
  },
  {
    path: "/login",
    component: LoginForm
  },
  {
    path: "/service-section",
    component: ServiceSection
  },
  {
    path: "/layout",
    component: Layout
  },
];
const router = createRouter({
  history,
  routes
});
export default router;