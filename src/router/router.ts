import {
  createWebHistory,
  createRouter
} from "vue-router";
import LoginForm from "../components/LoginForm.vue";
import Layout from "../layout/Layout.vue";
import ServiceSection from "../pages/service-section.vue";
import Customers from "../pages/customers.vue";
import Products from "../pages/products.vue";
import Markets from "../pages/markets.vue";
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
  {
    path: "/customers",
    component: Customers
  },
  {
    path: "/markets",
    component: Markets
  },
  {
    path: "/products",
    component: Products
  },
];
const router = createRouter({
  history,
  routes
});
export default router;