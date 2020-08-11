<template>
  <div>
    <el-drawer
        title="购买矿机"
        :before-close="handleClose"
        :visible.sync="dialogVisibal"
        size="40%"
        direction="rtl"
        custom-class="demo-drawer"
        ref="drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="form">
          <el-form-item label="购买数量" :label-width="formLabelWidth">
            <el-input v-model="form.count" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="选择国家" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择邮寄国家">
              <el-option label="中国" value="cn"></el-option>
              <el-option label="日本" value="jp"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="详细地址" :label-width="formLabelWidth">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item label="支付chars" :label-width="formLabelWidth">
            <el-input-number size="mini" v-model="form.num"></el-input-number>
          </el-form-item>
        </el-form>
        <p style="color: red; font-size: 12px;">提示： 2小时内可以撤销订单</p>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
  export default {
    name: "BuyProd",
    props: {
      dialog: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        form: {
          count: '',
          region: '',
          desc: '',
          num: ''
        },
        loading: false,
        formLabelWidth: '80px'
      }
    },
    computed: {
      dialogVisibal: {
        get () {
          return this.dialog
        },
        set () {
          this.$emit('closeBuyProdDialog')
        }
      }
    },
    methods: {
      handleClose(done) {
        done()
      },
      cancelForm() {
        this.$emit('closeBuyProdDialog')
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
  .demo-drawer__content form {
    flex: 1;
  }
  .demo-drawer__footer {
    display: flex;
    padding: 20px;
  }
  .demo-drawer__footer button {
    flex: 1;
  }
</style>