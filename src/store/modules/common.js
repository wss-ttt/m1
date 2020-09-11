export default {
  namespaced: true, // 命名空间
  state: {
    pageTitle: "", // 页面标题
    headerParentPath: "" // 保存上级路由地址
  },
  getters: {},
  actions: {},
  mutations: {
    updatePageTitle(state, pageTitle) {
      state.pageTitle = pageTitle;
    },
    updateHeaderParentPath(state, headerParentPath) {
      state.headerParentPath = headerParentPath;
    }
  }
};
