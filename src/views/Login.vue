<template>
  <div class="login-bg">
    <div class="header">
      <el-select v-model="value" placeholder="请选择" @change="changeLang">
        <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div>
      <el-button>{{$t('app.hello')}}</el-button>
      <el-date-picker
              v-model="value1"
              type="date"
              :placeholder="$t('app.selDate')">
      </el-date-picker>
    </div>
    <form class="login" @submit="login">
      <h2>
        <span>Login</span>
        <span class="error-msg" v-show="errMsg">{{errMsg}}</span>
      </h2>
      <input type="text" class="login-input" v-model="username" placeholder="User Name">
      <input type="password" class="login-input" v-model="password" placeholder="Password" autocomplete="new-password">
      <!--<button type="submit" class="login-btn">登 录</button>-->
      <el-button type="primary" native-type="submit" size="small" style="width: 30%; margin: 20px auto;">登 录</el-button>
    </form>

  </div>
</template>

<script>
import cookie from '../util/cookie.js'
export default {
  name: 'Login',
  metaInfo: {
    title: 'Login vue'
  },
  data () {
    return {
      errMsg: '',
      username: '',
      password: '',
      options: [{
        value: 'zh',
        label: '中文'
      }, {
        value: 'en',
        label: 'English'
      }, {
        value: 'ja',
        label: 'Japanese'
      }
      ],
      value: 'zh',
      value1: ''
    }
  },
  methods: {
    changeLang() {
      this.$i18n.locale = this.value;
    },
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
    }
  },
  mounted() {
    console.log(this.$t('app.hello'))
  }
}
</script>

<style scoped>
.login {
  width: 400px;
  height: 250px;
  background-color: rgba(204, 204, 204, 0.7);
  margin: 30px auto 0;
  display: flex;
  flex-direction: column;

}
  .login h2 {
    font-weight: normal;
    padding: 10px;
    margin: 0px;
  }
  .login h2 {
    color: #fff;
  }
  .login-input {
    margin: 10px auto;
    line-height: 30px;
    padding-left: 10px;
    width: 90%;
    border-radius: 2px;
    border: none;
  }
  .login-btn {
    width: 30%;
    line-height: 30px;
    margin: 20px auto;
    background-color: #5e99d5e8;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  .error-msg {
    font-size: 16px;
    color: red;
  }
  .login-bg {
    /*display: flex;*/
    /*align-items: center;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    /*flex-direction: column;*/
    /*justify-content: center;*/
  }
  .login-bg h1 {
    /*color: #fff;*/
    /*font-family: fantasy;*/
  }
</style>
