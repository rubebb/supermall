<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <RecommendView :recommends="recommends"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";

  import {getHomeMultidata} from "../../network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
    },
    data() {
      return  {
        banners: [],
        recommends: [],
        // dKeyword: [],
        // keywords: [],
      }
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // this.dKeyword = res.data.dKeyword.list;
        // this.keywords = res.data.keywords.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: blue;
    color: #f6f6f6;
  }
</style>
