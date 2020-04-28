<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if='!isAcitve'>
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-avtive"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    <!--      <div>首页</div>-->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'black'
      }
    },
    data() {
      return {

      }
    },
    computed: {
      isAcitve(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isAcitve? {color: this.activeColor} : {}
      }
    },
    methods:{
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
