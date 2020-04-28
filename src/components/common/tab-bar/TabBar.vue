<template>
  <div id="tab-bar">
    <slot></slot>
<!--    <div class="tab-bar-item">-->
<!--      <img src="../../assets/img/tabbar/2.svg" alt="">-->
<!--      <div>分类</div>-->
<!--    </div>-->
<!--    <div class="tab-bar-item">-->
<!--      <img src="../../assets/img/tabbar/3.svg" alt="">-->
<!--      <div>购物车</div>-->
<!--    </div>-->
<!--    <div class="tab-bar-item">-->
<!--      <img src="../../assets/img/tabbar/4.svg" alt="">-->
<!--      <div>我的</div>-->
<!--    </div>-->
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>

  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    box-shadow: 0px -1px 5px rgba(100, 100, 100, 0.1);
  }
</style>
