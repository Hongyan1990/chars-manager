<template>
  <div class="put-wrap">
    <el-container>
      <el-aside width="200px">
        <el-image :src="src1" style="height: 800px"></el-image>
      </el-aside>
      <el-container>

        <el-header style="height: auto;">
          <el-row :gutter="60">
            <el-col :span="8">
              <el-card shadow="always" style="background: #409EFF;opacity: 0.8;">
                <p class="card-inner-top">CHARS可用余额</p>
                <p class="card-inner-bottom">1000</p>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="always" style="background: #F56C6C;opacity: 0.8;">
                <p class="card-inner-top">CHARS不可用余额</p>
                <p class="card-inner-bottom">1000</p>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="always" style="background: #E6A23C;opacity: 0.8;">
                <p class="card-inner-top">全球累计投放</p>
                <p class="card-inner-bottom">1000</p>
              </el-card>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <el-row>
            <el-col :offset="8"  :span="8" style="display: flex; flex-direction: column; align-items: center;margin-top: 10%;">

              <div class="put-btn">
                <span>开始投放</span>
              </div>
              <div style="margin-top: 30px">
                <el-link icon="el-icon-back" type="primary">返回上一级</el-link>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
      <el-aside width="200px">
        <el-image :src="src1"  style="height: 800px"></el-image>
      </el-aside>
    </el-container>

  </div>
</template>

<script>
  import MyCard from '../components/MyCard.vue'
  export default {
    name: "PutChars",
    components: {
      MyCard
    },
    data() {
      return {
        src1: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    }
  }
</script>

<style scoped>
.put-wrap {
  width: 90%;
  margin: 25px auto;
}
.card-inner-top {
  text-align: center;
  font-size: 14px;
  color: #f2f6fc;
}
.card-inner-bottom {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  padding: 15px;
  color: #f2f6fc;
}
  .put-btn {
    background: url("../static/xz3.png") no-repeat center 20px;
    height: 150px;
    width: 150px;
    border: 2px dashed #409EFF;
    border-radius: 100%;
    box-shadow: 0 0px 4px #409eff, 0 0 6px #409eff;
    position: relative;
    cursor: pointer;
    transition: opacity .5s;
  }
.put-btn span {
  position: absolute;
  bottom: 40px;
  right: 50%;
  margin-right: -32px;
  font-weight: bold;
  color: #555;

}
.put-btn:hover {
  opacity: 0.7;
}
</style>