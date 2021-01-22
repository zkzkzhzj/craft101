<template>
  <div id="container">
    <top-component />
    <div id="body">
      <router-view />
    </div>
  </div>
</template>

<script>
  import TopComponent from "./components/TopLayout";

  export default {
    components: { TopComponent },
  };
</script>

<style lang="scss">
  #container {
    display: flex;
    justify-content: center;
    // 기본적으로 body 에 패딩 값이 존재한다
    #body {
      padding-top: 50px;
    }
  }
</style>
