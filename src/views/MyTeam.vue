<template>
  <div class="my-content">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>我的团队</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="team-info">
      <el-row :gutter="100">
        <el-col :span="6">
          <p class="team-info-inner-p">个人级别</p>
          <h3  class="team-info-inner-h3">1</h3>
        </el-col>
        <el-col :span="6">
          <p class="team-info-inner-p">团队总量</p>
          <h3  class="team-info-inner-h3">1000</h3>
        </el-col>
      </el-row>
    </div>
    <div style="margin: 15px 0px;">
      <el-input style="width: 40%" placeholder="请输入内容" v-model="input3" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div>
      <el-table
          :data="recommendData"
          v-loading="loading"
          max-height="500px"
          stripe
          style="width: 100%">
        <template slot="empty">
          <img :src="imgUrl" style="width: 200px; margin-top: 20px;"/>
          <p style="margin: 0; line-height: 30px">暂无数据</p>
        </template>
        <el-table-column
            label="下级名字">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.food_name }}</span>
          </template>
        </el-table-column>
        <el-table-column
            label="充值USDT数量">
          <template slot-scope="scope">
            <span>{{scope.row.food_style}}</span>
          </template>
        </el-table-column>
        <el-table-column
            label="下级数量">
          <template slot-scope="scope">
            <span>{{scope.row.taste}}</span>
          </template>
        </el-table-column>
        <el-table-column
            label="投放矿机数">
          <template slot-scope="scope">
            <span>{{scope.row.is_combo}}</span>
          </template>
        </el-table-column>
        <el-table-column
            label="已赚chars数量">
          <template slot-scope="scope">
            <span>{{scope.row.is_combo}}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import imgUrl from '../static/no-data2.png'
  export default {
    name: "MyTeam",
    data() {
      return {
        recommendData: [],
        imgUrl
      }
    }
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
  }
  .team-info-inner-p {
    font-size: 14px;
    padding: 15px;
  }
  .team-info-inner-h3 {
    padding-bottom: 15px;
  }
</style>