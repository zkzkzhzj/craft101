<template>
  <div>
    <div>
      <ranking-layout />
    </div>
    <div>
      <server-list-layout />
    </div>
  </div>
</template>

<script>
  import RankingLayout from "./RankingLayout.vue";
  import ServerListLayout from "./ServerListLayout.vue";
  export default {
    components: { RankingLayout, ServerListLayout },
  };
</script>

<style></style>
