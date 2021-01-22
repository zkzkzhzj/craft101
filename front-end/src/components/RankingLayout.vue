<template>
  <div id="ranking">
    <video muted autoplay loop>
      <source src="../assets/video/craft101_main.mp4" />
    </video>
    <div id="rankingFirst">
      <ranking-server-layout />
    </div>
    <div id="rankingSecond">
      <ranking-server-layout />
    </div>
    <div id="rankingThird">
      <ranking-server-layout />
    </div>
    <div id="rankingFourth">
      <ranking-server-layout />
    </div>
    <div id="rankingFifth">
      <ranking-server-layout />
    </div>
    <div id="rankingSixth">
      <ranking-server-layout />
    </div>
    <div id="rankingSeventh">
      <ranking-server-layout />
    </div>
    <div id="rankingEighth">
      <ranking-server-layout />
    </div>
    <div id="rankigNinth">
      <ranking-server-layout />
    </div>
    <div id="rankingTenth">
      <ranking-server-layout />
    </div>
  </div>
</template>

<script>
  import RankingServerLayout from "./RankingServerLayout.vue";
  export default {
    components: {
      RankingServerLayout,
    },
  };
</script>

<style lang="scss">
  #ranking {
    overflow: hidden;
    position: relative;
    margin: 0px auto;
    video {
      width: 100%;
      max-width: 1280px;
    }
    #rankingFirst {
      position: absolute;
      // 상단에서 조금 내리고 중앙 우측정렬
      top: 30%;
      left: 50%;
      // 중앙 정렬
      transform: (translate(-50%, -50%));
    }
    #rankingSecond {
      position: absolute;
      // 상단에서 조금 내리고 중앙 우측정렬
      top: 45%;
      left: 35%;
      // 중앙 정렬
      transform: (translate(-50%, -50%));
    }
    #rankingThird {
      position: absolute;
      // 상단에서 조금 내리고 중앙 우측정렬
      top: 45%;
      left: 65%;
      // 중앙 정렬
      transform: (translate(-50%, -50%));
    }
    #rankingFourth {
      position: absolute;
      // 상단에서 조금 내리고 중앙 우측정렬
      top: 60%;
      left: 25%;
      // 중앙 정렬
      transform: (translate(-50%, -50%));
    }
    #rankingFifth {
      position: absolute;
      // 상단에서 조금 내리고 중앙 우측정렬
      top: 60%;
      left: 50%;
      // 중앙 정렬
      transform: (translate(-50%, -50%));
    }
    #rankingSixth {
      position: absolute;
      // 상단에서 조금 내리고 중앙 우측정렬
      top: 60%;
      left: 75%;
      // 중앙 정렬
      transform: (translate(-50%, -50%));
    }
    #rankingSeventh {
      position: absolute;
      // 상단에서 조금 내리고 중앙 우측정렬
      top: 75%;
      left: 10%;
      // 중앙 정렬
      transform: (translate(-50%, -50%));
    }
    #rankingEighth {
      position: absolute;
      // 상단에서 조금 내리고 중앙 우측정렬
      top: 75%;
      left: 35%;
      // 중앙 정렬
      transform: (translate(-50%, -50%));
    }
    #rankigNinth {
      position: absolute;
      // 상단에서 조금 내리고 중앙 우측정렬
      top: 75%;
      left: 65%;
      // 중앙 정렬
      transform: (translate(-50%, -50%));
    }
    #rankingTenth {
      position: absolute;
      // 상단에서 조금 내리고 중앙 우측정렬
      top: 75%;
      left: 90%;
      // 중앙 정렬
      transform: (translate(-50%, -50%));
    }
  }
</style>
