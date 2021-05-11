<template>
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyright:'Copyright 2020 Kenchan'
    };
  },
  methods: {},
};
</script>

<style scoped>
 footer{
   background:#222;
   padding: 8px;
   margin-top: 40px;
 }
 p{
   color: lightgreen;
   text-align: center;
 }
</style>
