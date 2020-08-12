<template>
  <div class="my-content">
    <div class="team-info">
      <el-row :gutter="10">
        <el-col :span="6">
          <p class="team-info-inner-p">个人已投放数量</p>
          <h3  class="team-info-inner-h3">1</h3>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row :gutter="20">
        <el-col :span="8" >
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" class="image">
            <div style="padding: 14px;text-align: center;">
              <span>亚洲</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">开始投放</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8" >
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" class="image">
            <div style="padding: 14px;text-align: center;">
              <span>欧洲</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">开始投放</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8" >
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" class="image">
            <div style="padding: 14px;text-align: center;">
              <span>非洲</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">开始投放</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row style="margin-top: 25px;">
        <el-col :offset="8" :span="8" style="text-align: center;">
          <el-link icon="el-icon-back" type="primary">返回上一级</el-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PersonalPut"
  }
</script>

<style scoped>
  .my-content {
    padding: 20px;
    width: 80%;
    margin: 0 auto;
  }
  .team-info {
    margin: 20px 0px;
    background: #fafafa;
    border-radius: 5px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .team-info-inner-p {
    font-size: 14px;
    padding: 15px;
  }
  .team-info-inner-h3 {
    padding-bottom: 15px;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>