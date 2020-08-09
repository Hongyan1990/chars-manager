<template>
  <div>
    <el-dialog  :close-on-click-modal="false" title="重置密码" :visible.sync="dialogVisibale">
      <el-form  label-width="70px"  :model="rowData">
        <el-form-item label="邮箱账户">
          <el-input v-model="rowData.email" autocomplete="off">
            <template slot="append">
              <el-button type="primary" plain>获取验证码</el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="rowData.verifyCode" autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input type="password" v-model="rowData.newPwd" autocomplete="off">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeAddMenuDialog">取 消</el-button>
        <el-button type="primary" @click="addMyMenu" :disabled="validateErr">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "ForgetPwd",
    props: {
      isShowDialog: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        rowData: {
          shopname: '',
          verifyCode: '',
          newPwd: ''
        },
        formLabelWidth: '100px',
        validateErr: false,
        validateMsg: ''
      }
    },
    computed: {
      dialogVisibale: {
        get () {
          return this.isShowDialog
        },
        set () {
          this.$emit('closeCreateMenuDialog')
        }
      },

    },
    methods: {
      closeAddMenuDialog () {
        this.$emit('closeCreateMenuDialog')
      },
      addMyMenu () {

      }
    }
  }
</script>

<style scoped>
  .el-input {
    width: 80%;
  }
</style>