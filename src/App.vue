
<template>
  <div class="common-layout">
    <div class="bgradient">
    <div style="max-width:1344px;margin: 0 auto;">
      <NavBar />
      <MainView />
    <Highlights />
    <FeatureView />
    <Footer />
    </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/navbar.vue";
import MainView from "./components/MainView.vue";
import FeatureView from "./components/FeatureView.vue";
import Highlights from "./components/Highlights.vue"
import Footer from "./components/Footer.vue"
export default {
  data() {
    return {
      activeIndex: "1",
      images: [
          {id:1, url: require("./assets/feature/feature.png"), title: "feature"},
          {id:2, url: require("./assets/feature/fastRecord.webp"), title: "fastRecord"},
        ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  components: {
    NavBar,
    MainView,
    FeatureView,
    Highlights,
    Footer
  },
};
</script>

<style>
body {
  margin: 0px;
}
.middleFlex{
  display: flex;
  justify-content: center;
}
.bgradient {
  background-image: linear-gradient(135deg, #fddb92 10%, #d1fdff 100%);
}
.el-row {
  align-items: center;
}
</style>