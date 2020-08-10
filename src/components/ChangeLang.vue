<template>
  <div>
    <el-dropdown @command="changeLang">
      <span class="el-dropdown-link" :style="{color: color}">
        {{value}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="zh">中文</el-dropdown-item>
        <el-dropdown-item command="en">English</el-dropdown-item>
        <el-dropdown-item command="ja">Japanese</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    name: "ChangeLang",
    props: ['color'],
    data() {
      return {
        langMap: {
          'zh': '中文',
          'en': 'English',
          'ja': 'Japanese'
        },
        value: '中文',
      }
    },
    methods: {
      changeLang(e) {
        this.value = this.langMap[e]
        this.$i18n.locale = e
      },
    }
  }
</script>

<style scoped>
  .el-dropdown{
    color: #ffffff;
  }
</style>