<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <div class="profileSidebar">
          <div class="psHeader">
            <svg preserveAspectRatio="none" viewBox="0 0 100 100">
              <polygon points="0 20, 100 20, 0 100" opacity=".65"></polygon>
            </svg>
            <svg class="svg2" preserveAspectRatio="none" viewBox="0 0 100 120">
              <polygon points="0 20, 100 20, 15 120" opacity=".8"></polygon>
            </svg>
            <div class="psContent">
              <h3>XXXX (XXX XX)</h3>
              <h3>Chan XXXX XXXX</h3>
              <span></span>
            </div>
          </div>
          <div class="psPhoto">
            <img v-bind:src="imgUrl" alt="" />
            <div class="psSocial">
              <a
                href="https://facebook.com/kenchan1993"
                target="_blank"
                class="facebook"
                ><i class="icofont icofont-facebook"></i
              ></a>
              <a href="https://kchkd.com/" target="_blank" class="website"
                ><i class="icofont icofont-dribbble"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="sectionTitle">{{ $t("m.aboutme") }}</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-6">
                  <div class="icon_box_01">
                    <i class="icon icon-User"></i>
                    <h3>{{ $t("m.name") }}</h3>
                    <p>
                      XXXX (XXXX)<br />
                      XXXX XXXXX XXXXX
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="icon_box_01">
                    <i class="icon icon-Calculator"></i>
                    <h3>{{ $t("m.age") }}</h3>
                    <p>XX</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="icon_box_01">
                    <i class="icon icon-Mail"></i>
                    <h3>{{ $t("m.email") }}</h3>
                    <p>XXXXXXX@gmail.com</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="icon_box_01">
                    <i class="icon icon-Phone"></i>
                    <h3>{{ $t("m.phone") }}</h3>
                    <p>+852 XXXXXXXX</p>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="icon_box_01">
                    <i class="icon icon-Pointer"></i>
                    <h3>{{ $t("m.address") }}</h3>
                    <p>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.772560939037!2d113.9400417159126!3d22.28660374902171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403e2a56312d963%3A0x841013ea27da46af!2z5a-M5p2x6YKo!5e0!3m2!1szh-TW!2shk!4v1620385413357!5m2!1szh-TW!2shk"
                        width="600"
                        height="450"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                      ></iframe>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt30">
            <div class="col-lg-12">
              <h2 class="sectionTitle mb22">{{ $t("m.myself") }}</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="abContent">
                <p>Test</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      imgUrl: "./static/images/about/Kenchan.jpg",
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.profileSidebar {
  position: relative;
  min-height: 100px;
  padding: 20px;
  background: #ffffffc0;
  .psHeader {
    min-height: 130px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    svg {
      height: 150px;
      fill: #01d85f;
      width: 100%;
      position: absolute;
      top: -25px;
      z-index: 2;
    }
  }
  .psPhoto img {
    width: 100%;
    height: auto;
  }
  .psContent {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3;
    width: 100%;
    padding: 30px 35px;
    h3 {
      margin: 0 0 9px;
      color: #fff;
      font-size: 18px;
      font-weight: 600;
      line-height: 0.8;
      text-transform: capitalize;
    }
  }
  .psSocial {
    position: absolute;
    left: 0;
    bottom: 30px;
    z-index: 2;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 0 35px;
    a {
      text-decoration: none;
      width: 40px;
      height: 40px;
      background: #201e29;
      color: #fff;
      border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
      font-size: 14px;
      line-height: 1;
      text-align: center;
      padding: 14px 0;
      margin: 0 10px 0 0;
      transition: all ease 300ms;
      -moz-transition: all ease 300ms;
      -webkit-transition: all ease 300ms;
      -o-transition: all ease 300ms;
      -ms-transition: all ease 300ms;
    }
    a.facebook {
      background: #1773ea;
    }
    a.website {
      background: #10f596;
    }
    a:hover {
      background: #616161;
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
  }
}
.container-fluid {
  padding: 20px;
  background: #ffffffc0;
  iframe{
    width: 100%;
  }
}
img {
  vertical-align: middle;
  border-style: none;
}
</style>
