<template>
  <div class="my-card">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "MyCard"
  }
</script>

<style scoped>
  .my-card {
    display: inline-block;
    height: 100px;
    width: 15%;
    background-image: linear-gradient(153deg, #909399 40%, #f5f5f5);
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    /*background: url("../static/world2.png") no-repeat left top;*/
    /*background-size: contain;*/
  }
</style>