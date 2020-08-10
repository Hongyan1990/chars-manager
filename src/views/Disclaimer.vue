<template>
  <div class="my-content">
    <h3 class="dis-title">免责声明</h3>
    <div></div>
    <div class="dis-btn">
      <el-button>返回</el-button>
      <el-button type="primary">确认</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Disclaimer"
  }
</script>

<style scoped>
  .my-content {
    padding: 20px;
    width: 80%;
    margin: 0 auto;
  }
  .dis-title {
    text-align: center;
    padding: 20px ;
  }
  .dis-btn {
    text-align: center;
    padding: 20px;
  }
</style>