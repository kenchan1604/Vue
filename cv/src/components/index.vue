<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 center">
        <h1>歡迎瀏覽我的網頁</h1>
        <div class="box">
          <span class="dot" v-for="i in 250" :key="i"></span>
          <span class="text" @click="clickButton()">進入</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  name: "index",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    //   效果1
    clickButton() {
      const vm = this;
      const TIME_COUNT = 1;
      let tl = anime.timeline({
        loop: 1,
      });
      tl.add({
        targets: ".text",
        easing: "easeInOutSine",
        clipPath: [
          { value: " polygon(0% 0%,100% 0%, 100% 100%,0% 100%)" },
          { value: " polygon(100% 0%,100% 0%, 100% 100%,100% 100%)" },
        ],
        begin: function () {
          anime({
            targets: ".dot",
            translateX: function () {
              return anime.random(-40, 40);
            },
            translateY: function () {
              return anime.random(-40, 40);
            },
            scale: function () {
              return anime.random(4, 0.5);
            },
            easing: "easeInOutSine",
            opacity: [{ value: 0, duration: 800 }],
            delay: anime.stagger(40, { grid: [25, 10], from: "100" }),
          });
        },
      });
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
            //跳转的页面写在此处
            vm.$router.push("/about");
          }
        }, 1000);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
  text-align: center;
}
.box {
  width: 100px;
  height: 40px;
  margin: 10px auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  .dot {
    display: block;
    width: 4px;
    height: 4px;
    // border-radius: 50%;
    background: #0adb68;
  }
  .text {
    transform-origin: 30px 50%;
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    font-size: 0.88rem;
    font-weight: bold;
    color: white;
    line-height: 40px;
    text-transform: uppercase;
    cursor: pointer;
    text-align: center;
  }
}
</style>
