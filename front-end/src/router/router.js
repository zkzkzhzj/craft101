import Vue from "vue";
import Router from "vue-router";

// 연결할 컴포넌트
import Body from "../components/BodyLayout.vue";

// 뷰에서 라우터 사용하겠다
Vue.use(Router);

export default new Router({
  mode: "history", // 자연스러운 url, 지정하지 않으면 # 기호로 url 사용
  routes: [
    {
      path: "/",
      name: "Body",
      component: Body,
    },
  ],
});
