<template>
  <div>
    <el-drawer
        title="我的订单"
        :before-close="handleClose"
        :visible.sync="myOrderDialogVisibal"
        size="40%"
        direction="rtl"
        custom-class="demo-drawer"
        ref="drawer"
    >
      <div class="demo-drawer__content">
        <div class="form">
          <p>
            <span>购买矿机数量</span>
          </p>
          <p>
            <span>支付Chars</span>
          </p>
          <p>
            <span>邮寄地址</span>
          </p>
        </div>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '撤销订单' }}</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
  export default {
    name: "MyOrder",
    props: {
      orderDialog: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        loading: false,
      }
    },
    computed: {
      myOrderDialogVisibal: {
        get () {
          return this.orderDialog
        },
        set () {
          this.$emit('closeOrderDialog')
        }
      }
    },
    methods: {
      handleClose(done) {
        done()
      },
      cancelForm() {
        this.$emit('closeOrderDialog')
      }
    }
  }
</script>

<style scoped>
  .el-drawer__body {
    padding: 20px;
  }
  .demo-drawer__content {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
  }
  .demo-drawer__content .form {
    flex: 1;
  }
  .demo-drawer__footer {
    display: flex;
    padding: 20px;
  }
  .demo-drawer__footer button {
    flex: 1;
  }
  .form p {
    padding: 15px 10px;
    color: #555;
  }
</style>