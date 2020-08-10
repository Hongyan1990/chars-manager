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
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2), 0px 3px 10px 0px rgba(0, 0, 0, 0.19);
  }
  .head-left {
    color: #ffffff;
  }
  .head-right {
    display: flex;
  }
</style>