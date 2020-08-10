<template>
  <div class="home-wrap">
    <div class="head">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card shadow="always">
            <p class="card-inner-top">USDT可用余额</p>
            <p class="card-inner-bottom">1000</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="always">
            <p class="card-inner-top">CHARS可用余额</p>
            <p class="card-inner-bottom">1000</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="always">
            <p class="card-inner-top">CHARS冻结不可用数量</p>
            <p class="card-inner-bottom">1000</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="always">
            <p class="card-inner-top">
              <el-link type="primary" icon="el-icon-connection">USDT转换chars</el-link>
            </p>
            <p class="card-inner-bottom">
              <el-link type="primary" icon="el-icon-money">提现 </el-link>
            </p>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="my-content">
      <el-row :gutter="100">
        <el-col :offset="6" :span="6" style="text-align: center">
          <el-card shadow="always">
            <el-link>
              <p class="my-link">
                <img width="100" :src="windowsImg">
                实物选项
              </p>
            </el-link>
          </el-card>
        </el-col>
        <el-col :span="6" style="text-align: center;">
          <el-card shadow="always">
            <el-link>
              <p class="my-link">
                <img width="100" :src="windowsImg">
                虚拟经济
              </p>
            </el-link>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import windowsImg from '../static/Windows.png'
  export default {
    name: "Home",
    components: {
    },
    data() {
      return {
        windowsImg
      }
    }
  }
</script>

<style scoped>
  .home-wrap {
    padding: 15px;
  }
  .head {
    padding: 20px;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2), 0px 3px 10px 0px rgba(0, 0, 0, 0.19);
  }
  .card-inner-top {
    text-align: center;
    font-size: 14px;
  }
  .card-inner-bottom {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    padding: 15px;
  }
  .my-link {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .my-content {
    margin-top: 100px;
  }
</style>