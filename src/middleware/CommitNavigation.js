export default function CommitNavigation(router, store) {
    router.beforeEach((to, from, next) => {
        // Reset pageStack to the new route
        store.commit('navigator/reset', to.matched.map(m => m.components.default));
        next();
    });
}

