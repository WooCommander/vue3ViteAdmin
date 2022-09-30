import {
  createWebHistory,
  createRouter
} from "vue-router";
import LoginForm from "../components/LoginForm.vue";
import Layout from "../components/Layout.vue";
const history = createWebHistory();
const routes = [

  {
    path: "/login",
    component: LoginForm
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