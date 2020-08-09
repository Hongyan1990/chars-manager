<template>
  <div class="login-bg">
    <div class="header">
      <change-lang />
    </div>
    <div class="block">
      <el-image :src="src" class="img"></el-image>
    </div>
    <div class="form">
      <el-form class="my-form" ref="form" :model="form" label-width="80px" style="width: 500px; margin: 0 auto;">
        <el-form-item label="邮箱账号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.pwd"></el-input>
          <span class="forget-pwd" @click="isShowDialog=true">忘记密码</span>
        </el-form-item>
        <!--<button type="submit" class="login-btn">登 录</button>-->
        <el-button type="primary" native-type="submit" size="small" style="width: 30%; margin: 0px auto 20px;">登 录</el-button>
      </el-form>
    </div>
    <forget-pwd :isShowDialog="isShowDialog" @closeCreateMenuDialog="closeCreateMenuDialog" />
  </div>
</template>

<script>
import cookie from '../util/cookie.js'
import ChangeLang from "../components/ChangeLang.vue";
import ForgetPwd from "./ForgetPwd.vue";
export default {
  name: 'Login',
  metaInfo: {
    title: 'Login vue'
  },
  components: {
    ChangeLang,
    ForgetPwd
  },
  data () {
    return {
      form: {
        name: ''
      },
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      isShowDialog: false
    }
  },
  methods: {

    login (e) {
    	e.preventDefault()
    	if(this.validteForm()) {
    		cookie.setCookie('username', this.username, 1)
        if(this.username === 'admin') {
          this.$router.push('/order')
        } else {
          this.$router.push('/user')
        }
			  
    	}
    },
    validteForm () {
      if (!this.username) {
        this.errMsg = '用户名不能为空'
        return false
      }
      if (!this.password) {
        this.errMsg = '密码不能为空'
        return false
      }
      if (this.username === 'admin' && this.password !== 'admin') {
      	this.errMsg = '密码不正确'
      	return false
      }
      if (this.username !== 'admin' && this.password !== '123456') {
      	this.errMsg = '密码不正确'
      	return false
      }
      this.errMsg = ''
      return true
    },
    closeCreateMenuDialog () {
      this.isShowDialog = false;
    }
  },
  mounted() {
    console.log(this.$t('app.hello'))
  }
}
</script>

<style scoped>
  .login-bg {
    /*text-align: center;*/
  }
  .header {
    padding: 10px;
    background-color: #555555;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2), 0px 3px 10px 0px rgba(0, 0, 0, 0.19);
    text-align: right;
  }
  .block {
    margin: 30px 0px;
  }
  .img {
    height: 250px;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2), 0px 3px 10px 0px rgba(0, 0, 0, 0.19);
  }
  .forget-pwd {
    float: right;
    cursor: pointer;
    color: #409EFF;
  }
  .my-form {
    width: 500px;
    margin: 0px auto;
    padding: 25px 15px 15px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2), 0px 3px 10px 0px rgba(0, 0, 0, 0.19);
  }
</style>
