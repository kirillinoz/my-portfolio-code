import { createRouter, createWebHashHistory } from "vue-router";

//VIEWS
import AboutMe from "../views/AboutMe.vue";
import Projects from "../views/Projects.vue";
import Skills from "../views/Skills.vue";
import Contacts from "../views/Contacts.vue";

const routes = [
  {
    path: "/",
    name: "AboutMe",
    component: AboutMe,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
