<template>
  <header class="d-flex justify-content-center">
    <nav class="navbar fixed-top bg-light">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link class="nav-link" to="/index">首頁 Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">個人介紹</router-link>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            >作品</a
          >
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">網頁</a>
            <a class="dropdown-item" href="#">APP</a>
          </div>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/works">作品</router-link>
        </li>
      </ul>
      <ul class="nav lang">
        <li :class="isActive ? 'active' : ''" @click="changeLang('zh-CN')">
          繁體中文
        </li>
        /
        <li :class="!isActive ? 'active' : ''" @click="changeLang('en-US')">
          English
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
      this.toActive(lang);
    },
    toActive(lang) {
      this.isActive = lang ? true : false;
    },
  },
};
</script>

<style>
</style>
