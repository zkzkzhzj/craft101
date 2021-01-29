<template>
  <div id="subServer">
    <server-list-info-layout />
  </div>
</template>

<script>
  import ServerListInfoLayout from "./ServerListInfoLayout.vue";
  export default {
    components: { ServerListInfoLayout },
  };
</script>

<style lang="scss">
  #subServer {
    width: 100%;
    max-width: 1280px;
  }
</style>
