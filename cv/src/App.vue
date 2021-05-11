<template>
  <div id="app">
    <app-header v-bind:title="title"></app-header>
    <div id="v-content" v-bind:style="{ minHeight: Height + 'px' }">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
  data() {
    return {
      timer: "",
      value: 0,
      Height: 0,
      title: "KenChan CV",
    };
  },
  methods: {
    get() {
      this.value++;
      //console.log(this.value);
    },
  },
  mounted() {
    //動態設置內容高度 讓footer始終居底 header+footer的高度
    this.Height = document.documentElement.clientHeight - 186; //監聽瀏覽器窗口變化
    window.onresize = () => {
      this.Height = document.documentElement.clientHeight - 186;
    };
    this.timer = setInterval(this.get, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import "@icon/icofont/icofont.css";
#app {
  margin-top: 60px;
  padding-top: 30px;
  background: linear-gradient(45deg, #3752eb, #08d86a);
  background-size: 200% 100%;
  background-position: 0 0;
  animation: bgposition 5s infinite linear alternate;
}
@keyframes bgposition {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}
</style>
