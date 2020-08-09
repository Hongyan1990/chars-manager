<template>
  <div class="user">
    <el-popover
        placement="bottom"
        width="80"
        trigger="click">
      <div class="wrap-info">
        <el-button size="small" type="text">交易密码</el-button>
        <el-button size="small" type="text">团队</el-button>
        <el-button size="small" type="text">退出</el-button>
      </div>
      <el-avatar  slot="reference" size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </el-popover>
  </div>
</template>

<script>
  export default {
    name: "UserInfo"
  }
</script>

<style scoped>
  .user {
    padding: 0 20px;
  }
  .wrap-info{
    display: flex;
    flex-direction: column;
  }
</style>