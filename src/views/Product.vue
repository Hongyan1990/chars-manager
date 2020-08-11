<template>
  <div class="prod-wrap">
    <h3 class="prod-h3">全球累计销售10000台</h3>
    <div class="prod-count">
      <span>购买数量</span>
      <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="购买数量"></el-input-number>
      <span>台</span>
    </div>
    <div class="prod-btn">
      <el-button type="primary" @click="showDialog=true">点击购买</el-button>
      <el-badge :value="12" class="item">
        <el-button type="primary" plain @click="showOrderDialog=true">我的订单</el-button>
      </el-badge>
    </div>
    <buy-prod :dialog="showDialog" @closeBuyProdDialog="closeBuyProdDialog" />
    <my-order :orderDialog="showOrderDialog" @closeOrderDialog="closeOrderDialog" />
  </div>
</template>

<script>
  import BuyProd from './BuyProd.vue'
  import MyOrder from './MyOrder.vue'
  export default {
    name: "Product",
    components: {
      BuyProd, MyOrder
    },
    data() {
      return {
        num: 1,
        showDialog: false,
        showOrderDialog: false
      }
    },
    methods: {
      handleChange() {},
      closeBuyProdDialog() {
        this.showDialog = false;
      },
      closeOrderDialog() {
        this.showOrderDialog = false;
      }
    }
  }
</script>

<style scoped>
  .prod-h3 {
    font-size: 30px;
    margin: 5% 0;
    text-align: center;
    color: #555555;
  }
  .prod-count {
    padding: 25px 0px;
    text-align: center;
  }
  .prod-count > span {
    display: inline-block;
    margin: 0 15px;
  }
  .prod-btn {
    text-align: center;
    margin-top: 5%;
  }
  .item {
    margin-left: 20px;
  }
</style>