export default function UserHasPermissions(router, store) {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!store.getters.isLoggedIn) {
        const query = { ...from.name && { redirect : to.fullPath } }
        next({
          path : '/login',
          query,
        })
      } else {
        next()
      }
    } else {
      next()
    }
  })
}
