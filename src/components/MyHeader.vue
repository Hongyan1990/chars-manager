<template>
  <div  class="my-header">
    <div class="head-left">
      Chars
    </div>
    <div class="head-right">
      <change-lang/>
      <user-info/>
    </div>
  </div>
</template>

<script>
  import ChangeLang from "./ChangeLang.vue";
  import UserInfo from "./UserInfo.vue";
  export default {
    name: "MyHeader",
    components: {
      ChangeLang,
      UserInfo
    }
  }
</script>

<style scoped>
  .my-header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    align-items: center;
    background: #555;
  }
  .head-left {
    color: #ffffff;
  }
  .head-right {
    display: flex;
  }
</style>