const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/BoardPage.vue") },
    ],
  },
  {
    path: "/signin",
    component: () => import("pages/SignInView.vue"),
  },
  {
    path: "/post/:id",
    component: () => import("src/pages/PostReadView.vue"),
    props: true,
  },
  {
    path: "/post/create",
    component: () => import("src/pages/PostCreateView.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
