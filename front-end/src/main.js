import Vue from "vue";
import App from "./App.vue";

// 라우터 추가
import router from "./router/router";

/*컴포넌트 추가(전역)
import TopComponent from "./components/TopLayout.vue";

Vue.component(TopComponent.name, TopComponent);
*/

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
