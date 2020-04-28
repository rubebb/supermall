<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/1.svg" alt="">
      <img slot="item-icon-avtive" src="@/assets/img/tabbar/5.svg">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/catagory" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/2.svg" alt="">
      <img slot="item-icon-avtive" src="@/assets/img/tabbar/5.svg">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/3.svg" alt="">
      <img slot="item-icon-avtive" src="@/assets/img/tabbar/5.svg">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/4.svg" alt="">
      <img slot="item-icon-avtive" src="@/assets/img/tabbar/5.svg">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tab-bar/TabBar";
  import TabBarItem from "components/common/tab-bar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
